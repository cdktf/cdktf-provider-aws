# `ecsService` Submodule <a name="`ecsService` Submodule" id="@cdktf/provider-aws.ecsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsService <a name="EcsService" id="@cdktf/provider-aws.ecsService.EcsService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service aws_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsService.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsService(scope: Construct, id: string, config: EcsServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig">EcsServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig">EcsServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker">putDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentConfiguration">putDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentController">putDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy">putOrderedPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration">putServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries">putServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putVolumeConfiguration">putVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putVpcLatticeConfigurations">putVpcLatticeConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetAvailabilityZoneRebalancing">resetAvailabilityZoneRebalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker">resetDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentConfiguration">resetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController">resetDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent">resetDeploymentMaximumPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent">resetDeploymentMinimumHealthyPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount">resetDesiredCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment">resetForceNewDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds">resetHealthCheckGracePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetIamRole">resetIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy">resetOrderedPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy">resetSchedulingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration">resetServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries">resetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition">resetTaskDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTriggers">resetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetVolumeConfiguration">resetVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetVpcLatticeConfigurations">resetVpcLatticeConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState">resetWaitForSteadyState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsService.EcsService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ecsService.EcsService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsService.EcsService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsService.EcsService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ecsService.EcsService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsService.EcsService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ecsService.EcsService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ecsService.EcsService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ecsService.EcsService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ecsService.EcsService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsService.EcsService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ecsService.EcsService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarms` <a name="putAlarms" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms"></a>

```typescript
public putAlarms(value: EcsServiceAlarms): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy"></a>

```typescript
public putCapacityProviderStrategy(value: IResolvable | EcsServiceCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>[]

---

##### `putDeploymentCircuitBreaker` <a name="putDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker"></a>

```typescript
public putDeploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---

##### `putDeploymentConfiguration` <a name="putDeploymentConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentConfiguration"></a>

```typescript
public putDeploymentConfiguration(value: EcsServiceDeploymentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration">EcsServiceDeploymentConfiguration</a>

---

##### `putDeploymentController` <a name="putDeploymentController" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController"></a>

```typescript
public putDeploymentController(value: EcsServiceDeploymentController): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: IResolvable | EcsServiceLoadBalancer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: EcsServiceNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---

##### `putOrderedPlacementStrategy` <a name="putOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy"></a>

```typescript
public putOrderedPlacementStrategy(value: IResolvable | EcsServiceOrderedPlacementStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>[]

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints"></a>

```typescript
public putPlacementConstraints(value: IResolvable | EcsServicePlacementConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>[]

---

##### `putServiceConnectConfiguration` <a name="putServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration"></a>

```typescript
public putServiceConnectConfiguration(value: EcsServiceServiceConnectConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---

##### `putServiceRegistries` <a name="putServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries"></a>

```typescript
public putServiceRegistries(value: EcsServiceServiceRegistries): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts"></a>

```typescript
public putTimeouts(value: EcsServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

---

##### `putVolumeConfiguration` <a name="putVolumeConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putVolumeConfiguration"></a>

```typescript
public putVolumeConfiguration(value: EcsServiceVolumeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration">EcsServiceVolumeConfiguration</a>

---

##### `putVpcLatticeConfigurations` <a name="putVpcLatticeConfigurations" id="@cdktf/provider-aws.ecsService.EcsService.putVpcLatticeConfigurations"></a>

```typescript
public putVpcLatticeConfigurations(value: IResolvable | EcsServiceVpcLatticeConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putVpcLatticeConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>[]

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.ecsService.EcsService.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetAvailabilityZoneRebalancing` <a name="resetAvailabilityZoneRebalancing" id="@cdktf/provider-aws.ecsService.EcsService.resetAvailabilityZoneRebalancing"></a>

```typescript
public resetAvailabilityZoneRebalancing(): void
```

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy"></a>

```typescript
public resetCapacityProviderStrategy(): void
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-aws.ecsService.EcsService.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetDeploymentCircuitBreaker` <a name="resetDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker"></a>

```typescript
public resetDeploymentCircuitBreaker(): void
```

##### `resetDeploymentConfiguration` <a name="resetDeploymentConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentConfiguration"></a>

```typescript
public resetDeploymentConfiguration(): void
```

##### `resetDeploymentController` <a name="resetDeploymentController" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController"></a>

```typescript
public resetDeploymentController(): void
```

##### `resetDeploymentMaximumPercent` <a name="resetDeploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent"></a>

```typescript
public resetDeploymentMaximumPercent(): void
```

##### `resetDeploymentMinimumHealthyPercent` <a name="resetDeploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent"></a>

```typescript
public resetDeploymentMinimumHealthyPercent(): void
```

##### `resetDesiredCount` <a name="resetDesiredCount" id="@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount"></a>

```typescript
public resetDesiredCount(): void
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags"></a>

```typescript
public resetEnableEcsManagedTags(): void
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand"></a>

```typescript
public resetEnableExecuteCommand(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-aws.ecsService.EcsService.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetForceNewDeployment` <a name="resetForceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment"></a>

```typescript
public resetForceNewDeployment(): void
```

##### `resetHealthCheckGracePeriodSeconds` <a name="resetHealthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds"></a>

```typescript
public resetHealthCheckGracePeriodSeconds(): void
```

##### `resetIamRole` <a name="resetIamRole" id="@cdktf/provider-aws.ecsService.EcsService.resetIamRole"></a>

```typescript
public resetIamRole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsService.EcsService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.ecsService.EcsService.resetLaunchType"></a>

```typescript
public resetLaunchType(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetOrderedPlacementStrategy` <a name="resetOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy"></a>

```typescript
public resetOrderedPlacementStrategy(): void
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints"></a>

```typescript
public resetPlacementConstraints(): void
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion"></a>

```typescript
public resetPlatformVersion(): void
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.ecsService.EcsService.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSchedulingStrategy` <a name="resetSchedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy"></a>

```typescript
public resetSchedulingStrategy(): void
```

##### `resetServiceConnectConfiguration` <a name="resetServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration"></a>

```typescript
public resetServiceConnectConfiguration(): void
```

##### `resetServiceRegistries` <a name="resetServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries"></a>

```typescript
public resetServiceRegistries(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsService.EcsService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecsService.EcsService.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTaskDefinition` <a name="resetTaskDefinition" id="@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition"></a>

```typescript
public resetTaskDefinition(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ecsService.EcsService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-aws.ecsService.EcsService.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

##### `resetVolumeConfiguration` <a name="resetVolumeConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetVolumeConfiguration"></a>

```typescript
public resetVolumeConfiguration(): void
```

##### `resetVpcLatticeConfigurations` <a name="resetVpcLatticeConfigurations" id="@cdktf/provider-aws.ecsService.EcsService.resetVpcLatticeConfigurations"></a>

```typescript
public resetVpcLatticeConfigurations(): void
```

##### `resetWaitForSteadyState` <a name="resetWaitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState"></a>

```typescript
public resetWaitForSteadyState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcsService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsService.EcsService.isConstruct"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

ecsService.EcsService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

ecsService.EcsService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

ecsService.EcsService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ecsService.EcsService.generateConfigForImport"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

ecsService.EcsService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EcsService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsService.EcsService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ecsService.EcsService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ecsService.EcsService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcsService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference">EcsServiceDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentController">deploymentController</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy">orderedPlacementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration">serviceConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.volumeConfiguration">volumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference">EcsServiceVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.vpcLatticeConfigurations">vpcLatticeConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList">EcsServiceVpcLatticeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput">alarmsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.availabilityZoneRebalancingInput">availabilityZoneRebalancingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput">deploymentCircuitBreakerInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentConfigurationInput">deploymentConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration">EcsServiceDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput">deploymentControllerInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput">deploymentMaximumPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput">deploymentMinimumHealthyPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput">desiredCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput">forceNewDeploymentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput">healthCheckGracePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput">iamRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput">launchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput">loadBalancerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput">orderedPlacementStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput">propagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput">schedulingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput">serviceConnectConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput">serviceRegistriesInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.volumeConfigurationInput">volumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration">EcsServiceVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.vpcLatticeConfigurationsInput">vpcLatticeConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput">waitForSteadyStateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.availabilityZoneRebalancing">availabilityZoneRebalancing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent">deploymentMaximumPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent">deploymentMinimumHealthyPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCount">desiredCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment">forceNewDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy">schedulingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState">waitForSteadyState</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsService.EcsService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsService.EcsService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsService.EcsService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsService.property.alarms"></a>

```typescript
public readonly alarms: EcsServiceAlarmsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsService.EcsService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: EcsServiceCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a>

---

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="deploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker"></a>

```typescript
public readonly deploymentCircuitBreaker: EcsServiceDeploymentCircuitBreakerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a>

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: EcsServiceDeploymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference">EcsServiceDeploymentConfigurationOutputReference</a>

---

##### `deploymentController`<sup>Required</sup> <a name="deploymentController" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentController"></a>

```typescript
public readonly deploymentController: EcsServiceDeploymentControllerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: EcsServiceLoadBalancerList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: EcsServiceNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a>

---

##### `orderedPlacementStrategy`<sup>Required</sup> <a name="orderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy"></a>

```typescript
public readonly orderedPlacementStrategy: EcsServiceOrderedPlacementStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: EcsServicePlacementConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a>

---

##### `serviceConnectConfiguration`<sup>Required</sup> <a name="serviceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration"></a>

```typescript
public readonly serviceConnectConfiguration: EcsServiceServiceConnectConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a>

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries"></a>

```typescript
public readonly serviceRegistries: EcsServiceServiceRegistriesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsService.property.timeouts"></a>

```typescript
public readonly timeouts: EcsServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a>

---

##### `volumeConfiguration`<sup>Required</sup> <a name="volumeConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.volumeConfiguration"></a>

```typescript
public readonly volumeConfiguration: EcsServiceVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference">EcsServiceVolumeConfigurationOutputReference</a>

---

##### `vpcLatticeConfigurations`<sup>Required</sup> <a name="vpcLatticeConfigurations" id="@cdktf/provider-aws.ecsService.EcsService.property.vpcLatticeConfigurations"></a>

```typescript
public readonly vpcLatticeConfigurations: EcsServiceVpcLatticeConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList">EcsServiceVpcLatticeConfigurationsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: EcsServiceAlarms;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---

##### `availabilityZoneRebalancingInput`<sup>Optional</sup> <a name="availabilityZoneRebalancingInput" id="@cdktf/provider-aws.ecsService.EcsService.property.availabilityZoneRebalancingInput"></a>

```typescript
public readonly availabilityZoneRebalancingInput: string;
```

- *Type:* string

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput"></a>

```typescript
public readonly capacityProviderStrategyInput: IResolvable | EcsServiceCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>[]

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.ecsService.EcsService.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `deploymentCircuitBreakerInput`<sup>Optional</sup> <a name="deploymentCircuitBreakerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput"></a>

```typescript
public readonly deploymentCircuitBreakerInput: EcsServiceDeploymentCircuitBreaker;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---

##### `deploymentConfigurationInput`<sup>Optional</sup> <a name="deploymentConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentConfigurationInput"></a>

```typescript
public readonly deploymentConfigurationInput: EcsServiceDeploymentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration">EcsServiceDeploymentConfiguration</a>

---

##### `deploymentControllerInput`<sup>Optional</sup> <a name="deploymentControllerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput"></a>

```typescript
public readonly deploymentControllerInput: EcsServiceDeploymentController;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---

##### `deploymentMaximumPercentInput`<sup>Optional</sup> <a name="deploymentMaximumPercentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput"></a>

```typescript
public readonly deploymentMaximumPercentInput: number;
```

- *Type:* number

---

##### `deploymentMinimumHealthyPercentInput`<sup>Optional</sup> <a name="deploymentMinimumHealthyPercentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput"></a>

```typescript
public readonly deploymentMinimumHealthyPercentInput: number;
```

- *Type:* number

---

##### `desiredCountInput`<sup>Optional</sup> <a name="desiredCountInput" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput"></a>

```typescript
public readonly desiredCountInput: number;
```

- *Type:* number

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput"></a>

```typescript
public readonly enableEcsManagedTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput"></a>

```typescript
public readonly enableExecuteCommandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-aws.ecsService.EcsService.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceNewDeploymentInput`<sup>Optional</sup> <a name="forceNewDeploymentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput"></a>

```typescript
public readonly forceNewDeploymentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckGracePeriodSecondsInput`<sup>Optional</sup> <a name="healthCheckGracePeriodSecondsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput"></a>

```typescript
public readonly healthCheckGracePeriodSecondsInput: number;
```

- *Type:* number

---

##### `iamRoleInput`<sup>Optional</sup> <a name="iamRoleInput" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput"></a>

```typescript
public readonly iamRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsService.EcsService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput"></a>

```typescript
public readonly launchTypeInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: IResolvable | EcsServiceLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsService.EcsService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: EcsServiceNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---

##### `orderedPlacementStrategyInput`<sup>Optional</sup> <a name="orderedPlacementStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput"></a>

```typescript
public readonly orderedPlacementStrategyInput: IResolvable | EcsServiceOrderedPlacementStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>[]

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput"></a>

```typescript
public readonly placementConstraintsInput: IResolvable | EcsServicePlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>[]

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ecsService.EcsService.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `schedulingStrategyInput`<sup>Optional</sup> <a name="schedulingStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput"></a>

```typescript
public readonly schedulingStrategyInput: string;
```

- *Type:* string

---

##### `serviceConnectConfigurationInput`<sup>Optional</sup> <a name="serviceConnectConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput"></a>

```typescript
public readonly serviceConnectConfigurationInput: EcsServiceServiceConnectConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---

##### `serviceRegistriesInput`<sup>Optional</sup> <a name="serviceRegistriesInput" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput"></a>

```typescript
public readonly serviceRegistriesInput: EcsServiceServiceRegistries;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput"></a>

```typescript
public readonly taskDefinitionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EcsServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-aws.ecsService.EcsService.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeConfigurationInput`<sup>Optional</sup> <a name="volumeConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.volumeConfigurationInput"></a>

```typescript
public readonly volumeConfigurationInput: EcsServiceVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration">EcsServiceVolumeConfiguration</a>

---

##### `vpcLatticeConfigurationsInput`<sup>Optional</sup> <a name="vpcLatticeConfigurationsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.vpcLatticeConfigurationsInput"></a>

```typescript
public readonly vpcLatticeConfigurationsInput: IResolvable | EcsServiceVpcLatticeConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>[]

---

##### `waitForSteadyStateInput`<sup>Optional</sup> <a name="waitForSteadyStateInput" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput"></a>

```typescript
public readonly waitForSteadyStateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneRebalancing`<sup>Required</sup> <a name="availabilityZoneRebalancing" id="@cdktf/provider-aws.ecsService.EcsService.property.availabilityZoneRebalancing"></a>

```typescript
public readonly availabilityZoneRebalancing: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsService.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `deploymentMaximumPercent`<sup>Required</sup> <a name="deploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent"></a>

```typescript
public readonly deploymentMaximumPercent: number;
```

- *Type:* number

---

##### `deploymentMinimumHealthyPercent`<sup>Required</sup> <a name="deploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent"></a>

```typescript
public readonly deploymentMinimumHealthyPercent: number;
```

- *Type:* number

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-aws.ecsService.EcsService.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceNewDeployment`<sup>Required</sup> <a name="forceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment"></a>

```typescript
public readonly forceNewDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds"></a>

```typescript
public readonly healthCheckGracePeriodSeconds: number;
```

- *Type:* number

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.ecsService.EcsService.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecsService.EcsService.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schedulingStrategy`<sup>Required</sup> <a name="schedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy"></a>

```typescript
public readonly schedulingStrategy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsService.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `waitForSteadyState`<sup>Required</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState"></a>

```typescript
public readonly waitForSteadyState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsServiceAlarms <a name="EcsServiceAlarms" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceAlarms: ecsService.EcsServiceAlarms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames">alarmNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#alarm_names EcsService#alarm_names}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback">rollback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#rollback EcsService#rollback}. |

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames"></a>

```typescript
public readonly alarmNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#alarm_names EcsService#alarm_names}.

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable EcsService#enable}.

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback"></a>

```typescript
public readonly rollback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceCapacityProviderStrategy <a name="EcsServiceCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceCapacityProviderStrategy: ecsService.EcsServiceCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#capacity_provider EcsService#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#base EcsService#base}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#weight EcsService#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#capacity_provider EcsService#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#base EcsService#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#weight EcsService#weight}.

---

### EcsServiceConfig <a name="EcsServiceConfig" id="@cdktf/provider-aws.ecsService.EcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceConfig: ecsService.EcsServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | alarms block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.availabilityZoneRebalancing">availabilityZoneRebalancing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#availability_zone_rebalancing EcsService#availability_zone_rebalancing}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>[]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster">cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#cluster EcsService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | deployment_circuit_breaker block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration">EcsServiceDeploymentConfiguration</a></code> | deployment_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController">deploymentController</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | deployment_controller block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent">deploymentMaximumPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent">deploymentMinimumHealthyPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount">desiredCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#desired_count EcsService#desired_count}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable_execute_command EcsService#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#force_delete EcsService#force_delete}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment">forceNewDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#force_new_deployment EcsService#force_new_deployment}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole">iamRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#iam_role EcsService#iam_role}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#id EcsService#id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType">launchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#launch_type EcsService#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer">loadBalancer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>[]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy">orderedPlacementStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>[]</code> | ordered_placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints">placementConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>[]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion">platformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#platform_version EcsService#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags">propagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#propagate_tags EcsService#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy">schedulingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#scheduling_strategy EcsService#scheduling_strategy}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration">serviceConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | service_connect_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tags EcsService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tags_all EcsService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#task_definition EcsService#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#triggers EcsService#triggers}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.volumeConfiguration">volumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration">EcsServiceVolumeConfiguration</a></code> | volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.vpcLatticeConfigurations">vpcLatticeConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>[]</code> | vpc_lattice_configurations block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState">waitForSteadyState</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}.

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms"></a>

```typescript
public readonly alarms: EcsServiceAlarms;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#alarms EcsService#alarms}

---

##### `availabilityZoneRebalancing`<sup>Optional</sup> <a name="availabilityZoneRebalancing" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.availabilityZoneRebalancing"></a>

```typescript
public readonly availabilityZoneRebalancing: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#availability_zone_rebalancing EcsService#availability_zone_rebalancing}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: IResolvable | EcsServiceCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>[]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#cluster EcsService#cluster}.

---

##### `deploymentCircuitBreaker`<sup>Optional</sup> <a name="deploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker"></a>

```typescript
public readonly deploymentCircuitBreaker: EcsServiceDeploymentCircuitBreaker;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

deployment_circuit_breaker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: EcsServiceDeploymentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration">EcsServiceDeploymentConfiguration</a>

deployment_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#deployment_configuration EcsService#deployment_configuration}

---

##### `deploymentController`<sup>Optional</sup> <a name="deploymentController" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController"></a>

```typescript
public readonly deploymentController: EcsServiceDeploymentController;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

deployment_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#deployment_controller EcsService#deployment_controller}

---

##### `deploymentMaximumPercent`<sup>Optional</sup> <a name="deploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent"></a>

```typescript
public readonly deploymentMaximumPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}.

---

##### `deploymentMinimumHealthyPercent`<sup>Optional</sup> <a name="deploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent"></a>

```typescript
public readonly deploymentMinimumHealthyPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#desired_count EcsService#desired_count}.

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable_execute_command EcsService#enable_execute_command}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#force_delete EcsService#force_delete}.

---

##### `forceNewDeployment`<sup>Optional</sup> <a name="forceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment"></a>

```typescript
public readonly forceNewDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#force_new_deployment EcsService#force_new_deployment}.

---

##### `healthCheckGracePeriodSeconds`<sup>Optional</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds"></a>

```typescript
public readonly healthCheckGracePeriodSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}.

---

##### `iamRole`<sup>Optional</sup> <a name="iamRole" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#iam_role EcsService#iam_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#id EcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#launch_type EcsService#launch_type}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IResolvable | EcsServiceLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>[]

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#load_balancer EcsService#load_balancer}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: EcsServiceNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#network_configuration EcsService#network_configuration}

---

##### `orderedPlacementStrategy`<sup>Optional</sup> <a name="orderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy"></a>

```typescript
public readonly orderedPlacementStrategy: IResolvable | EcsServiceOrderedPlacementStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>[]

ordered_placement_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: IResolvable | EcsServicePlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>[]

placement_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#placement_constraints EcsService#placement_constraints}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#platform_version EcsService#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#propagate_tags EcsService#propagate_tags}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#region EcsService#region}

---

##### `schedulingStrategy`<sup>Optional</sup> <a name="schedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy"></a>

```typescript
public readonly schedulingStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#scheduling_strategy EcsService#scheduling_strategy}.

---

##### `serviceConnectConfiguration`<sup>Optional</sup> <a name="serviceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration"></a>

```typescript
public readonly serviceConnectConfiguration: EcsServiceServiceConnectConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

service_connect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#service_connect_configuration EcsService#service_connect_configuration}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries"></a>

```typescript
public readonly serviceRegistries: EcsServiceServiceRegistries;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#service_registries EcsService#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tags EcsService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tags_all EcsService#tags_all}.

---

##### `taskDefinition`<sup>Optional</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#task_definition EcsService#task_definition}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EcsServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#timeouts EcsService#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#triggers EcsService#triggers}.

---

##### `volumeConfiguration`<sup>Optional</sup> <a name="volumeConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.volumeConfiguration"></a>

```typescript
public readonly volumeConfiguration: EcsServiceVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration">EcsServiceVolumeConfiguration</a>

volume_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#volume_configuration EcsService#volume_configuration}

---

##### `vpcLatticeConfigurations`<sup>Optional</sup> <a name="vpcLatticeConfigurations" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.vpcLatticeConfigurations"></a>

```typescript
public readonly vpcLatticeConfigurations: IResolvable | EcsServiceVpcLatticeConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>[]

vpc_lattice_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#vpc_lattice_configurations EcsService#vpc_lattice_configurations}

---

##### `waitForSteadyState`<sup>Optional</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState"></a>

```typescript
public readonly waitForSteadyState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}.

---

### EcsServiceDeploymentCircuitBreaker <a name="EcsServiceDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceDeploymentCircuitBreaker: ecsService.EcsServiceDeploymentCircuitBreaker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback">rollback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#rollback EcsService#rollback}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enable EcsService#enable}.

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback"></a>

```typescript
public readonly rollback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceDeploymentConfiguration <a name="EcsServiceDeploymentConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceDeploymentConfiguration: ecsService.EcsServiceDeploymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#bake_time_in_minutes EcsService#bake_time_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration.property.lifecycleHook">lifecycleHook</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>[]</code> | lifecycle_hook block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration.property.strategy">strategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#strategy EcsService#strategy}. |

---

##### `bakeTimeInMinutes`<sup>Optional</sup> <a name="bakeTimeInMinutes" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration.property.bakeTimeInMinutes"></a>

```typescript
public readonly bakeTimeInMinutes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#bake_time_in_minutes EcsService#bake_time_in_minutes}.

---

##### `lifecycleHook`<sup>Optional</sup> <a name="lifecycleHook" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration.property.lifecycleHook"></a>

```typescript
public readonly lifecycleHook: IResolvable | EcsServiceDeploymentConfigurationLifecycleHook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>[]

lifecycle_hook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#lifecycle_hook EcsService#lifecycle_hook}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#strategy EcsService#strategy}.

---

### EcsServiceDeploymentConfigurationLifecycleHook <a name="EcsServiceDeploymentConfigurationLifecycleHook" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceDeploymentConfigurationLifecycleHook: ecsService.EcsServiceDeploymentConfigurationLifecycleHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook.property.hookTargetArn">hookTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#hook_target_arn EcsService#hook_target_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook.property.lifecycleStages">lifecycleStages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#lifecycle_stages EcsService#lifecycle_stages}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}. |

---

##### `hookTargetArn`<sup>Required</sup> <a name="hookTargetArn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook.property.hookTargetArn"></a>

```typescript
public readonly hookTargetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#hook_target_arn EcsService#hook_target_arn}.

---

##### `lifecycleStages`<sup>Required</sup> <a name="lifecycleStages" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook.property.lifecycleStages"></a>

```typescript
public readonly lifecycleStages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#lifecycle_stages EcsService#lifecycle_stages}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}.

---

### EcsServiceDeploymentController <a name="EcsServiceDeploymentController" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceDeploymentController: ecsService.EcsServiceDeploymentController = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#type EcsService#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#type EcsService#type}.

---

### EcsServiceLoadBalancer <a name="EcsServiceLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceLoadBalancer: ecsService.EcsServiceLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort">containerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration">EcsServiceLoadBalancerAdvancedConfiguration</a></code> | advanced_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName">elbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#elb_name EcsService#elb_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#target_group_arn EcsService#target_group_arn}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_name EcsService#container_name}.

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_port EcsService#container_port}.

---

##### `advancedConfiguration`<sup>Optional</sup> <a name="advancedConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: EcsServiceLoadBalancerAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration">EcsServiceLoadBalancerAdvancedConfiguration</a>

advanced_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#advanced_configuration EcsService#advanced_configuration}

---

##### `elbName`<sup>Optional</sup> <a name="elbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName"></a>

```typescript
public readonly elbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#elb_name EcsService#elb_name}.

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#target_group_arn EcsService#target_group_arn}.

---

### EcsServiceLoadBalancerAdvancedConfiguration <a name="EcsServiceLoadBalancerAdvancedConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceLoadBalancerAdvancedConfiguration: ecsService.EcsServiceLoadBalancerAdvancedConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.alternateTargetGroupArn">alternateTargetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#alternate_target_group_arn EcsService#alternate_target_group_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.productionListenerRule">productionListenerRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#production_listener_rule EcsService#production_listener_rule}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.testListenerRule">testListenerRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#test_listener_rule EcsService#test_listener_rule}. |

---

##### `alternateTargetGroupArn`<sup>Required</sup> <a name="alternateTargetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.alternateTargetGroupArn"></a>

```typescript
public readonly alternateTargetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#alternate_target_group_arn EcsService#alternate_target_group_arn}.

---

##### `productionListenerRule`<sup>Required</sup> <a name="productionListenerRule" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.productionListenerRule"></a>

```typescript
public readonly productionListenerRule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#production_listener_rule EcsService#production_listener_rule}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}.

---

##### `testListenerRule`<sup>Optional</sup> <a name="testListenerRule" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration.property.testListenerRule"></a>

```typescript
public readonly testListenerRule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#test_listener_rule EcsService#test_listener_rule}.

---

### EcsServiceNetworkConfiguration <a name="EcsServiceNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceNetworkConfiguration: ecsService.EcsServiceNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#subnets EcsService#subnets}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#assign_public_ip EcsService#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#security_groups EcsService#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#subnets EcsService#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#assign_public_ip EcsService#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#security_groups EcsService#security_groups}.

---

### EcsServiceOrderedPlacementStrategy <a name="EcsServiceOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceOrderedPlacementStrategy: ecsService.EcsServiceOrderedPlacementStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#field EcsService#field}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#type EcsService#type}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#field EcsService#field}.

---

### EcsServicePlacementConstraints <a name="EcsServicePlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServicePlacementConstraints: ecsService.EcsServicePlacementConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#expression EcsService#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#type EcsService#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#expression EcsService#expression}.

---

### EcsServiceServiceConnectConfiguration <a name="EcsServiceServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfiguration: ecsService.EcsServiceServiceConnectConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enabled EcsService#enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#namespace EcsService#namespace}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service">service</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>[]</code> | service block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#enabled EcsService#enabled}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: EcsServiceServiceConnectConfigurationLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#log_configuration EcsService#log_configuration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#namespace EcsService#namespace}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service"></a>

```typescript
public readonly service: IResolvable | EcsServiceServiceConnectConfigurationService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>[]

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#service EcsService#service}

---

### EcsServiceServiceConnectConfigurationLogConfiguration <a name="EcsServiceServiceConnectConfigurationLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationLogConfiguration: ecsService.EcsServiceServiceConnectConfigurationLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver">logDriver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#log_driver EcsService#log_driver}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#options EcsService#options}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption">secretOption</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>[]</code> | secret_option block. |

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#log_driver EcsService#log_driver}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#options EcsService#options}.

---

##### `secretOption`<sup>Optional</sup> <a name="secretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption"></a>

```typescript
public readonly secretOption: IResolvable | EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>[]

secret_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#secret_option EcsService#secret_option}

---

### EcsServiceServiceConnectConfigurationLogConfigurationSecretOption <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationLogConfigurationSecretOption: ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#value_from EcsService#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}.

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#value_from EcsService#value_from}.

---

### EcsServiceServiceConnectConfigurationService <a name="EcsServiceServiceConnectConfigurationService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationService: ecsService.EcsServiceServiceConnectConfigurationService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName">portName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port_name EcsService#port_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias">clientAlias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | client_alias block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName">discoveryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#discovery_name EcsService#discovery_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride">ingressPortOverride</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#ingress_port_override EcsService#ingress_port_override}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout">EcsServiceServiceConnectConfigurationServiceTimeout</a></code> | timeout block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls">EcsServiceServiceConnectConfigurationServiceTls</a></code> | tls block. |

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port_name EcsService#port_name}.

---

##### `clientAlias`<sup>Optional</sup> <a name="clientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias"></a>

```typescript
public readonly clientAlias: EcsServiceServiceConnectConfigurationServiceClientAlias;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

client_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#client_alias EcsService#client_alias}

---

##### `discoveryName`<sup>Optional</sup> <a name="discoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName"></a>

```typescript
public readonly discoveryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#discovery_name EcsService#discovery_name}.

---

##### `ingressPortOverride`<sup>Optional</sup> <a name="ingressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride"></a>

```typescript
public readonly ingressPortOverride: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#ingress_port_override EcsService#ingress_port_override}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.timeout"></a>

```typescript
public readonly timeout: EcsServiceServiceConnectConfigurationServiceTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout">EcsServiceServiceConnectConfigurationServiceTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#timeout EcsService#timeout}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.tls"></a>

```typescript
public readonly tls: EcsServiceServiceConnectConfigurationServiceTls;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls">EcsServiceServiceConnectConfigurationServiceTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tls EcsService#tls}

---

### EcsServiceServiceConnectConfigurationServiceClientAlias <a name="EcsServiceServiceConnectConfigurationServiceClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationServiceClientAlias: ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port EcsService#port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#dns_name EcsService#dns_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.testTrafficRules">testTrafficRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>[]</code> | test_traffic_rules block. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port EcsService#port}.

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#dns_name EcsService#dns_name}.

---

##### `testTrafficRules`<sup>Optional</sup> <a name="testTrafficRules" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.testTrafficRules"></a>

```typescript
public readonly testTrafficRules: IResolvable | EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>[]

test_traffic_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#test_traffic_rules EcsService#test_traffic_rules}

---

### EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules <a name="EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules: ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader</a></code> | header block. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules.property.header"></a>

```typescript
public readonly header: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#header EcsService#header}

---

### EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader <a name="EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader: ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue</a></code> | value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader.property.value"></a>

```typescript
public readonly value: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#value EcsService#value}

---

### EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue <a name="EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue: ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#exact EcsService#exact}. |

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#exact EcsService#exact}.

---

### EcsServiceServiceConnectConfigurationServiceTimeout <a name="EcsServiceServiceConnectConfigurationServiceTimeout" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationServiceTimeout: ecsService.EcsServiceServiceConnectConfigurationServiceTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout.property.idleTimeoutSeconds">idleTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#idle_timeout_seconds EcsService#idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout.property.perRequestTimeoutSeconds">perRequestTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#per_request_timeout_seconds EcsService#per_request_timeout_seconds}. |

---

##### `idleTimeoutSeconds`<sup>Optional</sup> <a name="idleTimeoutSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout.property.idleTimeoutSeconds"></a>

```typescript
public readonly idleTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#idle_timeout_seconds EcsService#idle_timeout_seconds}.

---

##### `perRequestTimeoutSeconds`<sup>Optional</sup> <a name="perRequestTimeoutSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout.property.perRequestTimeoutSeconds"></a>

```typescript
public readonly perRequestTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#per_request_timeout_seconds EcsService#per_request_timeout_seconds}.

---

### EcsServiceServiceConnectConfigurationServiceTls <a name="EcsServiceServiceConnectConfigurationServiceTls" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationServiceTls: ecsService.EcsServiceServiceConnectConfigurationServiceTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls.property.issuerCertAuthority">issuerCertAuthority</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority</a></code> | issuer_cert_authority block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#kms_key EcsService#kms_key}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}. |

---

##### `issuerCertAuthority`<sup>Required</sup> <a name="issuerCertAuthority" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls.property.issuerCertAuthority"></a>

```typescript
public readonly issuerCertAuthority: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority</a>

issuer_cert_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#issuer_cert_authority EcsService#issuer_cert_authority}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#kms_key EcsService#kms_key}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}.

---

### EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority <a name="EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority: ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority.property.awsPcaAuthorityArn">awsPcaAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#aws_pca_authority_arn EcsService#aws_pca_authority_arn}. |

---

##### `awsPcaAuthorityArn`<sup>Required</sup> <a name="awsPcaAuthorityArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority.property.awsPcaAuthorityArn"></a>

```typescript
public readonly awsPcaAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#aws_pca_authority_arn EcsService#aws_pca_authority_arn}.

---

### EcsServiceServiceRegistries <a name="EcsServiceServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceServiceRegistries: ecsService.EcsServiceServiceRegistries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn">registryArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#registry_arn EcsService#registry_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort">containerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port EcsService#port}. |

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#registry_arn EcsService#registry_arn}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_name EcsService#container_name}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#container_port EcsService#container_port}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port EcsService#port}.

---

### EcsServiceTimeouts <a name="EcsServiceTimeouts" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceTimeouts: ecsService.EcsServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#create EcsService#create}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#delete EcsService#delete}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#update EcsService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#create EcsService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#delete EcsService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#update EcsService#update}.

---

### EcsServiceVolumeConfiguration <a name="EcsServiceVolumeConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceVolumeConfiguration: ecsService.EcsServiceVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration.property.managedEbsVolume">managedEbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume">EcsServiceVolumeConfigurationManagedEbsVolume</a></code> | managed_ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}. |

---

##### `managedEbsVolume`<sup>Required</sup> <a name="managedEbsVolume" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration.property.managedEbsVolume"></a>

```typescript
public readonly managedEbsVolume: EcsServiceVolumeConfigurationManagedEbsVolume;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume">EcsServiceVolumeConfigurationManagedEbsVolume</a>

managed_ebs_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#managed_ebs_volume EcsService#managed_ebs_volume}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#name EcsService#name}.

---

### EcsServiceVolumeConfigurationManagedEbsVolume <a name="EcsServiceVolumeConfigurationManagedEbsVolume" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceVolumeConfigurationManagedEbsVolume: ecsService.EcsServiceVolumeConfigurationManagedEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#encrypted EcsService#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.fileSystemType">fileSystemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#file_system_type EcsService#file_system_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#iops EcsService#iops}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#kms_key_id EcsService#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#size_in_gb EcsService#size_in_gb}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#snapshot_id EcsService#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.tagSpecifications">tagSpecifications</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>[]</code> | tag_specifications block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#throughput EcsService#throughput}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.volumeInitializationRate">volumeInitializationRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#volume_initialization_rate EcsService#volume_initialization_rate}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#volume_type EcsService#volume_type}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#encrypted EcsService#encrypted}.

---

##### `fileSystemType`<sup>Optional</sup> <a name="fileSystemType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.fileSystemType"></a>

```typescript
public readonly fileSystemType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#file_system_type EcsService#file_system_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#iops EcsService#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#kms_key_id EcsService#kms_key_id}.

---

##### `sizeInGb`<sup>Optional</sup> <a name="sizeInGb" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#size_in_gb EcsService#size_in_gb}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#snapshot_id EcsService#snapshot_id}.

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IResolvable | EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>[]

tag_specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tag_specifications EcsService#tag_specifications}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#throughput EcsService#throughput}.

---

##### `volumeInitializationRate`<sup>Optional</sup> <a name="volumeInitializationRate" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.volumeInitializationRate"></a>

```typescript
public readonly volumeInitializationRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#volume_initialization_rate EcsService#volume_initialization_rate}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#volume_type EcsService#volume_type}.

---

### EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications <a name="EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications: ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#resource_type EcsService#resource_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications.property.propagateTags">propagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#propagate_tags EcsService#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tags EcsService#tags}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#resource_type EcsService#resource_type}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#propagate_tags EcsService#propagate_tags}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#tags EcsService#tags}.

---

### EcsServiceVpcLatticeConfigurations <a name="EcsServiceVpcLatticeConfigurations" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

const ecsServiceVpcLatticeConfigurations: ecsService.EcsServiceVpcLatticeConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations.property.portName">portName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port_name EcsService#port_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#target_group_arn EcsService#target_group_arn}. |

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#port_name EcsService#port_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#role_arn EcsService#role_arn}.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_service#target_group_arn EcsService#target_group_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsServiceAlarmsOutputReference <a name="EcsServiceAlarmsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceAlarmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput">alarmNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput">rollbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames">alarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback">rollback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNamesInput`<sup>Optional</sup> <a name="alarmNamesInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput"></a>

```typescript
public readonly alarmNamesInput: string[];
```

- *Type:* string[]

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollbackInput`<sup>Optional</sup> <a name="rollbackInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput"></a>

```typescript
public readonly rollbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames"></a>

```typescript
public readonly alarmNames: string[];
```

- *Type:* string[]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback"></a>

```typescript
public readonly rollback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceAlarms;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---


### EcsServiceCapacityProviderStrategyList <a name="EcsServiceCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): EcsServiceCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>[]

---


### EcsServiceCapacityProviderStrategyOutputReference <a name="EcsServiceCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceCapacityProviderStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>

---


### EcsServiceDeploymentCircuitBreakerOutputReference <a name="EcsServiceDeploymentCircuitBreakerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceDeploymentCircuitBreakerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput">rollbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback">rollback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollbackInput`<sup>Optional</sup> <a name="rollbackInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput"></a>

```typescript
public readonly rollbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```typescript
public readonly rollback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceDeploymentCircuitBreaker;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---


### EcsServiceDeploymentConfigurationLifecycleHookList <a name="EcsServiceDeploymentConfigurationLifecycleHookList" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceDeploymentConfigurationLifecycleHookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.get"></a>

```typescript
public get(index: number): EcsServiceDeploymentConfigurationLifecycleHookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceDeploymentConfigurationLifecycleHook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>[]

---


### EcsServiceDeploymentConfigurationLifecycleHookOutputReference <a name="EcsServiceDeploymentConfigurationLifecycleHookOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArnInput">hookTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStagesInput">lifecycleStagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn">hookTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages">lifecycleStages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hookTargetArnInput`<sup>Optional</sup> <a name="hookTargetArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArnInput"></a>

```typescript
public readonly hookTargetArnInput: string;
```

- *Type:* string

---

##### `lifecycleStagesInput`<sup>Optional</sup> <a name="lifecycleStagesInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStagesInput"></a>

```typescript
public readonly lifecycleStagesInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `hookTargetArn`<sup>Required</sup> <a name="hookTargetArn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn"></a>

```typescript
public readonly hookTargetArn: string;
```

- *Type:* string

---

##### `lifecycleStages`<sup>Required</sup> <a name="lifecycleStages" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages"></a>

```typescript
public readonly lifecycleStages: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceDeploymentConfigurationLifecycleHook;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>

---


### EcsServiceDeploymentConfigurationOutputReference <a name="EcsServiceDeploymentConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceDeploymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.putLifecycleHook">putLifecycleHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resetBakeTimeInMinutes">resetBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resetLifecycleHook">resetLifecycleHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLifecycleHook` <a name="putLifecycleHook" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.putLifecycleHook"></a>

```typescript
public putLifecycleHook(value: IResolvable | EcsServiceDeploymentConfigurationLifecycleHook[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.putLifecycleHook.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>[]

---

##### `resetBakeTimeInMinutes` <a name="resetBakeTimeInMinutes" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resetBakeTimeInMinutes"></a>

```typescript
public resetBakeTimeInMinutes(): void
```

##### `resetLifecycleHook` <a name="resetLifecycleHook" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resetLifecycleHook"></a>

```typescript
public resetLifecycleHook(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook">lifecycleHook</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList">EcsServiceDeploymentConfigurationLifecycleHookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput">bakeTimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.lifecycleHookInput">lifecycleHookInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration">EcsServiceDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifecycleHook`<sup>Required</sup> <a name="lifecycleHook" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook"></a>

```typescript
public readonly lifecycleHook: EcsServiceDeploymentConfigurationLifecycleHookList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHookList">EcsServiceDeploymentConfigurationLifecycleHookList</a>

---

##### `bakeTimeInMinutesInput`<sup>Optional</sup> <a name="bakeTimeInMinutesInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput"></a>

```typescript
public readonly bakeTimeInMinutesInput: string;
```

- *Type:* string

---

##### `lifecycleHookInput`<sup>Optional</sup> <a name="lifecycleHookInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.lifecycleHookInput"></a>

```typescript
public readonly lifecycleHookInput: IResolvable | EcsServiceDeploymentConfigurationLifecycleHook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationLifecycleHook">EcsServiceDeploymentConfigurationLifecycleHook</a>[]

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `bakeTimeInMinutes`<sup>Required</sup> <a name="bakeTimeInMinutes" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```typescript
public readonly bakeTimeInMinutes: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceDeploymentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentConfiguration">EcsServiceDeploymentConfiguration</a>

---


### EcsServiceDeploymentControllerOutputReference <a name="EcsServiceDeploymentControllerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceDeploymentControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceDeploymentController;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---


### EcsServiceLoadBalancerAdvancedConfigurationOutputReference <a name="EcsServiceLoadBalancerAdvancedConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.resetTestListenerRule">resetTestListenerRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestListenerRule` <a name="resetTestListenerRule" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.resetTestListenerRule"></a>

```typescript
public resetTestListenerRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArnInput">alternateTargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRuleInput">productionListenerRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRuleInput">testListenerRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn">alternateTargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule">productionListenerRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule">testListenerRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration">EcsServiceLoadBalancerAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateTargetGroupArnInput`<sup>Optional</sup> <a name="alternateTargetGroupArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArnInput"></a>

```typescript
public readonly alternateTargetGroupArnInput: string;
```

- *Type:* string

---

##### `productionListenerRuleInput`<sup>Optional</sup> <a name="productionListenerRuleInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRuleInput"></a>

```typescript
public readonly productionListenerRuleInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `testListenerRuleInput`<sup>Optional</sup> <a name="testListenerRuleInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRuleInput"></a>

```typescript
public readonly testListenerRuleInput: string;
```

- *Type:* string

---

##### `alternateTargetGroupArn`<sup>Required</sup> <a name="alternateTargetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn"></a>

```typescript
public readonly alternateTargetGroupArn: string;
```

- *Type:* string

---

##### `productionListenerRule`<sup>Required</sup> <a name="productionListenerRule" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule"></a>

```typescript
public readonly productionListenerRule: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `testListenerRule`<sup>Required</sup> <a name="testListenerRule" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule"></a>

```typescript
public readonly testListenerRule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceLoadBalancerAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration">EcsServiceLoadBalancerAdvancedConfiguration</a>

---


### EcsServiceLoadBalancerList <a name="EcsServiceLoadBalancerList" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceLoadBalancerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get"></a>

```typescript
public get(index: number): EcsServiceLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>[]

---


### EcsServiceLoadBalancerOutputReference <a name="EcsServiceLoadBalancerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.putAdvancedConfiguration">putAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetAdvancedConfiguration">resetAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName">resetElbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedConfiguration` <a name="putAdvancedConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.putAdvancedConfiguration"></a>

```typescript
public putAdvancedConfiguration(value: EcsServiceLoadBalancerAdvancedConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.putAdvancedConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration">EcsServiceLoadBalancerAdvancedConfiguration</a>

---

##### `resetAdvancedConfiguration` <a name="resetAdvancedConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetAdvancedConfiguration"></a>

```typescript
public resetAdvancedConfiguration(): void
```

##### `resetElbName` <a name="resetElbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName"></a>

```typescript
public resetElbName(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference">EcsServiceLoadBalancerAdvancedConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.advancedConfigurationInput">advancedConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration">EcsServiceLoadBalancerAdvancedConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput">elbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName">elbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: EcsServiceLoadBalancerAdvancedConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfigurationOutputReference">EcsServiceLoadBalancerAdvancedConfigurationOutputReference</a>

---

##### `advancedConfigurationInput`<sup>Optional</sup> <a name="advancedConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.advancedConfigurationInput"></a>

```typescript
public readonly advancedConfigurationInput: EcsServiceLoadBalancerAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerAdvancedConfiguration">EcsServiceLoadBalancerAdvancedConfiguration</a>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `elbNameInput`<sup>Optional</sup> <a name="elbNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput"></a>

```typescript
public readonly elbNameInput: string;
```

- *Type:* string

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `elbName`<sup>Required</sup> <a name="elbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName"></a>

```typescript
public readonly elbName: string;
```

- *Type:* string

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceLoadBalancer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>

---


### EcsServiceNetworkConfigurationOutputReference <a name="EcsServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---


### EcsServiceOrderedPlacementStrategyList <a name="EcsServiceOrderedPlacementStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceOrderedPlacementStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get"></a>

```typescript
public get(index: number): EcsServiceOrderedPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceOrderedPlacementStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>[]

---


### EcsServiceOrderedPlacementStrategyOutputReference <a name="EcsServiceOrderedPlacementStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceOrderedPlacementStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceOrderedPlacementStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>

---


### EcsServicePlacementConstraintsList <a name="EcsServicePlacementConstraintsList" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServicePlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get"></a>

```typescript
public get(index: number): EcsServicePlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServicePlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>[]

---


### EcsServicePlacementConstraintsOutputReference <a name="EcsServicePlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServicePlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServicePlacementConstraints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>

---


### EcsServiceServiceConnectConfigurationLogConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption">putSecretOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption">resetSecretOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretOption` <a name="putSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption"></a>

```typescript
public putSecretOption(value: IResolvable | EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>[]

---

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSecretOption` <a name="resetSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption"></a>

```typescript
public resetSecretOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption">secretOption</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput">logDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput">secretOptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver">logDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretOption`<sup>Required</sup> <a name="secretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption"></a>

```typescript
public readonly secretOption: EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a>

---

##### `logDriverInput`<sup>Optional</sup> <a name="logDriverInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput"></a>

```typescript
public readonly logDriverInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `secretOptionInput`<sup>Optional</sup> <a name="secretOptionInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput"></a>

```typescript
public readonly secretOptionInput: IResolvable | EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>[]

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfigurationLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get"></a>

```typescript
public get(index: number): EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>[]

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceServiceConnectConfigurationLogConfigurationSecretOption;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>

---


### EcsServiceServiceConnectConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: EcsServiceServiceConnectConfigurationLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---

##### `putService` <a name="putService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService"></a>

```typescript
public putService(value: IResolvable | EcsServiceServiceConnectConfigurationService[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>[]

---

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput">logConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput">serviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: EcsServiceServiceConnectConfigurationLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service"></a>

```typescript
public readonly service: EcsServiceServiceConnectConfigurationServiceList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: EcsServiceServiceConnectConfigurationLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: IResolvable | EcsServiceServiceConnectConfigurationService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---


### EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference <a name="EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.putTestTrafficRules">putTestTrafficRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetTestTrafficRules">resetTestTrafficRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTestTrafficRules` <a name="putTestTrafficRules" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.putTestTrafficRules"></a>

```typescript
public putTestTrafficRules(value: IResolvable | EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.putTestTrafficRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>[]

---

##### `resetDnsName` <a name="resetDnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetTestTrafficRules` <a name="resetTestTrafficRules" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetTestTrafficRules"></a>

```typescript
public resetTestTrafficRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.testTrafficRules">testTrafficRules</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.testTrafficRulesInput">testTrafficRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `testTrafficRules`<sup>Required</sup> <a name="testTrafficRules" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.testTrafficRules"></a>

```typescript
public readonly testTrafficRules: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList</a>

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `testTrafficRulesInput`<sup>Optional</sup> <a name="testTrafficRulesInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.testTrafficRulesInput"></a>

```typescript
public readonly testTrafficRulesInput: IResolvable | EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>[]

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfigurationServiceClientAlias;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---


### EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference <a name="EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.putValue">putValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.putValue"></a>

```typescript
public putValue(value: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.value"></a>

```typescript
public readonly value: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader</a>

---


### EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference <a name="EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderValue</a>

---


### EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList <a name="EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.get"></a>

```typescript
public get(index: number): EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>[]

---


### EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference <a name="EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.resetHeader">resetHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.putHeader"></a>

```typescript
public putHeader(value: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader</a>

---

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.headerInput">headerInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.header"></a>

```typescript
public readonly header: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeaderOutputReference</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesHeader</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules">EcsServiceServiceConnectConfigurationServiceClientAliasTestTrafficRules</a>

---


### EcsServiceServiceConnectConfigurationServiceList <a name="EcsServiceServiceConnectConfigurationServiceList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get"></a>

```typescript
public get(index: number): EcsServiceServiceConnectConfigurationServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceServiceConnectConfigurationService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>[]

---


### EcsServiceServiceConnectConfigurationServiceOutputReference <a name="EcsServiceServiceConnectConfigurationServiceOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias">putClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias">resetClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName">resetDiscoveryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride">resetIngressPortOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientAlias` <a name="putClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias"></a>

```typescript
public putClientAlias(value: EcsServiceServiceConnectConfigurationServiceClientAlias): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putTimeout"></a>

```typescript
public putTimeout(value: EcsServiceServiceConnectConfigurationServiceTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout">EcsServiceServiceConnectConfigurationServiceTimeout</a>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putTls"></a>

```typescript
public putTls(value: EcsServiceServiceConnectConfigurationServiceTls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls">EcsServiceServiceConnectConfigurationServiceTls</a>

---

##### `resetClientAlias` <a name="resetClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias"></a>

```typescript
public resetClientAlias(): void
```

##### `resetDiscoveryName` <a name="resetDiscoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName"></a>

```typescript
public resetDiscoveryName(): void
```

##### `resetIngressPortOverride` <a name="resetIngressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride"></a>

```typescript
public resetIngressPortOverride(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias">clientAlias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference">EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference">EcsServiceServiceConnectConfigurationServiceTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput">clientAliasInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput">discoveryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput">ingressPortOverrideInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout">EcsServiceServiceConnectConfigurationServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls">EcsServiceServiceConnectConfigurationServiceTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName">discoveryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride">ingressPortOverride</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientAlias`<sup>Required</sup> <a name="clientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias"></a>

```typescript
public readonly clientAlias: EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.timeout"></a>

```typescript
public readonly timeout: EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference">EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.tls"></a>

```typescript
public readonly tls: EcsServiceServiceConnectConfigurationServiceTlsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference">EcsServiceServiceConnectConfigurationServiceTlsOutputReference</a>

---

##### `clientAliasInput`<sup>Optional</sup> <a name="clientAliasInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput"></a>

```typescript
public readonly clientAliasInput: EcsServiceServiceConnectConfigurationServiceClientAlias;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---

##### `discoveryNameInput`<sup>Optional</sup> <a name="discoveryNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput"></a>

```typescript
public readonly discoveryNameInput: string;
```

- *Type:* string

---

##### `ingressPortOverrideInput`<sup>Optional</sup> <a name="ingressPortOverrideInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput"></a>

```typescript
public readonly ingressPortOverrideInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: EcsServiceServiceConnectConfigurationServiceTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout">EcsServiceServiceConnectConfigurationServiceTimeout</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: EcsServiceServiceConnectConfigurationServiceTls;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls">EcsServiceServiceConnectConfigurationServiceTls</a>

---

##### `discoveryName`<sup>Required</sup> <a name="discoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName"></a>

```typescript
public readonly discoveryName: string;
```

- *Type:* string

---

##### `ingressPortOverride`<sup>Required</sup> <a name="ingressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride"></a>

```typescript
public readonly ingressPortOverride: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceServiceConnectConfigurationService;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>

---


### EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference <a name="EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.resetIdleTimeoutSeconds">resetIdleTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.resetPerRequestTimeoutSeconds">resetPerRequestTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutSeconds` <a name="resetIdleTimeoutSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.resetIdleTimeoutSeconds"></a>

```typescript
public resetIdleTimeoutSeconds(): void
```

##### `resetPerRequestTimeoutSeconds` <a name="resetPerRequestTimeoutSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.resetPerRequestTimeoutSeconds"></a>

```typescript
public resetPerRequestTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.idleTimeoutSecondsInput">idleTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.perRequestTimeoutSecondsInput">perRequestTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.idleTimeoutSeconds">idleTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.perRequestTimeoutSeconds">perRequestTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout">EcsServiceServiceConnectConfigurationServiceTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutSecondsInput`<sup>Optional</sup> <a name="idleTimeoutSecondsInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.idleTimeoutSecondsInput"></a>

```typescript
public readonly idleTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `perRequestTimeoutSecondsInput`<sup>Optional</sup> <a name="perRequestTimeoutSecondsInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.perRequestTimeoutSecondsInput"></a>

```typescript
public readonly perRequestTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `idleTimeoutSeconds`<sup>Required</sup> <a name="idleTimeoutSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.idleTimeoutSeconds"></a>

```typescript
public readonly idleTimeoutSeconds: number;
```

- *Type:* number

---

##### `perRequestTimeoutSeconds`<sup>Required</sup> <a name="perRequestTimeoutSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.perRequestTimeoutSeconds"></a>

```typescript
public readonly perRequestTimeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfigurationServiceTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTimeout">EcsServiceServiceConnectConfigurationServiceTimeout</a>

---


### EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference <a name="EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.awsPcaAuthorityArnInput">awsPcaAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.awsPcaAuthorityArn">awsPcaAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsPcaAuthorityArnInput`<sup>Optional</sup> <a name="awsPcaAuthorityArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.awsPcaAuthorityArnInput"></a>

```typescript
public readonly awsPcaAuthorityArnInput: string;
```

- *Type:* string

---

##### `awsPcaAuthorityArn`<sup>Required</sup> <a name="awsPcaAuthorityArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.awsPcaAuthorityArn"></a>

```typescript
public readonly awsPcaAuthorityArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority</a>

---


### EcsServiceServiceConnectConfigurationServiceTlsOutputReference <a name="EcsServiceServiceConnectConfigurationServiceTlsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.putIssuerCertAuthority">putIssuerCertAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIssuerCertAuthority` <a name="putIssuerCertAuthority" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.putIssuerCertAuthority"></a>

```typescript
public putIssuerCertAuthority(value: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.putIssuerCertAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority</a>

---

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.issuerCertAuthority">issuerCertAuthority</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.issuerCertAuthorityInput">issuerCertAuthorityInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls">EcsServiceServiceConnectConfigurationServiceTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuerCertAuthority`<sup>Required</sup> <a name="issuerCertAuthority" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.issuerCertAuthority"></a>

```typescript
public readonly issuerCertAuthority: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference</a>

---

##### `issuerCertAuthorityInput`<sup>Optional</sup> <a name="issuerCertAuthorityInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.issuerCertAuthorityInput"></a>

```typescript
public readonly issuerCertAuthorityInput: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority">EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority</a>

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceConnectConfigurationServiceTls;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceTls">EcsServiceServiceConnectConfigurationServiceTls</a>

---


### EcsServiceServiceRegistriesOutputReference <a name="EcsServiceServiceRegistriesOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceServiceRegistriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput">registryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `registryArnInput`<sup>Optional</sup> <a name="registryArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput"></a>

```typescript
public readonly registryArnInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceServiceRegistries;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---


### EcsServiceTimeoutsOutputReference <a name="EcsServiceTimeoutsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

---


### EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference <a name="EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.putTagSpecifications">putTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetFileSystemType">resetFileSystemType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetSizeInGb">resetSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetTagSpecifications">resetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetVolumeInitializationRate">resetVolumeInitializationRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagSpecifications` <a name="putTagSpecifications" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.putTagSpecifications"></a>

```typescript
public putTagSpecifications(value: IResolvable | EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.putTagSpecifications.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>[]

---

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetFileSystemType` <a name="resetFileSystemType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetFileSystemType"></a>

```typescript
public resetFileSystemType(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSizeInGb` <a name="resetSizeInGb" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetSizeInGb"></a>

```typescript
public resetSizeInGb(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetTagSpecifications` <a name="resetTagSpecifications" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetTagSpecifications"></a>

```typescript
public resetTagSpecifications(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeInitializationRate` <a name="resetVolumeInitializationRate" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetVolumeInitializationRate"></a>

```typescript
public resetVolumeInitializationRate(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.fileSystemTypeInput">fileSystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.tagSpecificationsInput">tagSpecificationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeInitializationRateInput">volumeInitializationRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.fileSystemType">fileSystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeInitializationRate">volumeInitializationRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume">EcsServiceVolumeConfigurationManagedEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileSystemTypeInput`<sup>Optional</sup> <a name="fileSystemTypeInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.fileSystemTypeInput"></a>

```typescript
public readonly fileSystemTypeInput: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.sizeInGbInput"></a>

```typescript
public readonly sizeInGbInput: number;
```

- *Type:* number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `tagSpecificationsInput`<sup>Optional</sup> <a name="tagSpecificationsInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.tagSpecificationsInput"></a>

```typescript
public readonly tagSpecificationsInput: IResolvable | EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>[]

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeInitializationRateInput`<sup>Optional</sup> <a name="volumeInitializationRateInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeInitializationRateInput"></a>

```typescript
public readonly volumeInitializationRateInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileSystemType`<sup>Required</sup> <a name="fileSystemType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.fileSystemType"></a>

```typescript
public readonly fileSystemType: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeInitializationRate`<sup>Required</sup> <a name="volumeInitializationRate" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeInitializationRate"></a>

```typescript
public readonly volumeInitializationRate: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceVolumeConfigurationManagedEbsVolume;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume">EcsServiceVolumeConfigurationManagedEbsVolume</a>

---


### EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList <a name="EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.get"></a>

```typescript
public get(index: number): EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>[]

---


### EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference <a name="EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications">EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications</a>

---


### EcsServiceVolumeConfigurationOutputReference <a name="EcsServiceVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.putManagedEbsVolume">putManagedEbsVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedEbsVolume` <a name="putManagedEbsVolume" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.putManagedEbsVolume"></a>

```typescript
public putManagedEbsVolume(value: EcsServiceVolumeConfigurationManagedEbsVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.putManagedEbsVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume">EcsServiceVolumeConfigurationManagedEbsVolume</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.managedEbsVolume">managedEbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference">EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.managedEbsVolumeInput">managedEbsVolumeInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume">EcsServiceVolumeConfigurationManagedEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration">EcsServiceVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedEbsVolume`<sup>Required</sup> <a name="managedEbsVolume" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.managedEbsVolume"></a>

```typescript
public readonly managedEbsVolume: EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference">EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference</a>

---

##### `managedEbsVolumeInput`<sup>Optional</sup> <a name="managedEbsVolumeInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.managedEbsVolumeInput"></a>

```typescript
public readonly managedEbsVolumeInput: EcsServiceVolumeConfigurationManagedEbsVolume;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationManagedEbsVolume">EcsServiceVolumeConfigurationManagedEbsVolume</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsServiceVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceVolumeConfiguration">EcsServiceVolumeConfiguration</a>

---


### EcsServiceVpcLatticeConfigurationsList <a name="EcsServiceVpcLatticeConfigurationsList" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceVpcLatticeConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.get"></a>

```typescript
public get(index: number): EcsServiceVpcLatticeConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceVpcLatticeConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>[]

---


### EcsServiceVpcLatticeConfigurationsOutputReference <a name="EcsServiceVpcLatticeConfigurationsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer"></a>

```typescript
import { ecsService } from '@cdktf/provider-aws'

new ecsService.EcsServiceVpcLatticeConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsServiceVpcLatticeConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsService.EcsServiceVpcLatticeConfigurations">EcsServiceVpcLatticeConfigurations</a>

---



