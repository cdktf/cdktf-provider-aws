# `opsworksEcsClusterLayer` Submodule <a name="`opsworksEcsClusterLayer` Submodule" id="@cdktf/provider-aws.opsworksEcsClusterLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksEcsClusterLayer <a name="OpsworksEcsClusterLayer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer aws_opsworks_ecs_cluster_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayer(scope: Construct, id: string, config: OpsworksEcsClusterLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig">OpsworksEcsClusterLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig">OpsworksEcsClusterLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksEcsClusterLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksEcsClusterLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>[]

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling"></a>

```typescript
public putLoadBasedAutoScaling(value: OpsworksEcsClusterLayerLoadBasedAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling"></a>

```typescript
public resetLoadBasedAutoScaling(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsworksEcsClusterLayer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.generateConfigForImport"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

opsworksEcsClusterLayer.OpsworksEcsClusterLayer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsworksEcsClusterLayer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsworksEcsClusterLayer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsworksEcsClusterLayer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsworksEcsClusterLayer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput">ecsClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn">ecsClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksEcsClusterLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksEcsClusterLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksEcsClusterLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>[]

---

##### `ecsClusterArnInput`<sup>Optional</sup> <a name="ecsClusterArnInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput"></a>

```typescript
public readonly ecsClusterArnInput: string;
```

- *Type:* string

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput"></a>

```typescript
public readonly loadBasedAutoScalingInput: OpsworksEcsClusterLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecsClusterArn`<sup>Required</sup> <a name="ecsClusterArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn"></a>

```typescript
public readonly ecsClusterArn: string;
```

- *Type:* string

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksEcsClusterLayerCloudwatchConfiguration <a name="OpsworksEcsClusterLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

const opsworksEcsClusterLayerCloudwatchConfiguration: opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#log_streams OpsworksEcsClusterLayer#log_streams}

---

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

const opsworksEcsClusterLayerCloudwatchConfigurationLogStreams: opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}.

---

### OpsworksEcsClusterLayerConfig <a name="OpsworksEcsClusterLayerConfig" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

const opsworksEcsClusterLayerConfig: opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn">ecsClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ecsClusterArn`<sup>Required</sup> <a name="ecsClusterArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn"></a>

```typescript
public readonly ecsClusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksEcsClusterLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#cloudwatch_configuration OpsworksEcsClusterLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksEcsClusterLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#ebs_volume OpsworksEcsClusterLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling"></a>

```typescript
public readonly loadBasedAutoScaling: OpsworksEcsClusterLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#load_based_auto_scaling OpsworksEcsClusterLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}.

---

### OpsworksEcsClusterLayerEbsVolume <a name="OpsworksEcsClusterLayerEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

const opsworksEcsClusterLayerEbsVolume: opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

const opsworksEcsClusterLayerLoadBasedAutoScaling: opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#downscaling OpsworksEcsClusterLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#upscaling OpsworksEcsClusterLayer#upscaling}

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

const opsworksEcsClusterLayerLoadBasedAutoScalingDownscaling: opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

const opsworksEcsClusterLayerLoadBasedAutoScalingUpscaling: opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>

---


### OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksEcsClusterLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---


### OpsworksEcsClusterLayerEbsVolumeList <a name="OpsworksEcsClusterLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksEcsClusterLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksEcsClusterLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>[]

---


### OpsworksEcsClusterLayerEbsVolumeOutputReference <a name="OpsworksEcsClusterLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksEcsClusterLayerEbsVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```typescript
public putDownscaling(value: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```typescript
public putUpscaling(value: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```typescript
public resetDownscaling(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```typescript
public resetUpscaling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```typescript
public readonly downscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```typescript
public readonly upscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```typescript
public readonly downscalingInput: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```typescript
public readonly upscalingInput: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksEcsClusterLayerLoadBasedAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```typescript
import { opsworksEcsClusterLayer } from '@cdktf/provider-aws'

new opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```typescript
public resetCpuThreshold(): void
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```typescript
public resetIgnoreMetricsTime(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```typescript
public resetLoadThreshold(): void
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```typescript
public resetMemoryThreshold(): void
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```typescript
public resetThresholdsWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```typescript
public readonly cpuThresholdInput: number;
```

- *Type:* number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```typescript
public readonly ignoreMetricsTimeInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```typescript
public readonly loadThresholdInput: number;
```

- *Type:* number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```typescript
public readonly memoryThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```typescript
public readonly thresholdsWaitTimeInput: number;
```

- *Type:* number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```typescript
public readonly cpuThreshold: number;
```

- *Type:* number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```typescript
public readonly ignoreMetricsTime: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```typescript
public readonly memoryThreshold: number;
```

- *Type:* number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```typescript
public readonly thresholdsWaitTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---



