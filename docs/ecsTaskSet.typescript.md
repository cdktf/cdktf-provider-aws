# `ecsTaskSet` Submodule <a name="`ecsTaskSet` Submodule" id="@cdktf/provider-aws.ecsTaskSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskSet <a name="EcsTaskSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set aws_ecs_task_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSet(scope: Construct, id: string, config: EcsTaskSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig">EcsTaskSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig">EcsTaskSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putScale">putScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putServiceRegistries">putServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetScale">resetScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetServiceRegistries">resetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStable">resetWaitUntilStable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStableTimeout">resetWaitUntilStableTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy"></a>

```typescript
public putCapacityProviderStrategy(value: IResolvable | EcsTaskSetCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: IResolvable | EcsTaskSetLoadBalancer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putLoadBalancer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: EcsTaskSetNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `putScale` <a name="putScale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putScale"></a>

```typescript
public putScale(value: EcsTaskSetScale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `putServiceRegistries` <a name="putServiceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putServiceRegistries"></a>

```typescript
public putServiceRegistries(value: EcsTaskSetServiceRegistries): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.putServiceRegistries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy"></a>

```typescript
public resetCapacityProviderStrategy(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLaunchType"></a>

```typescript
public resetLaunchType(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetPlatformVersion"></a>

```typescript
public resetPlatformVersion(): void
```

##### `resetScale` <a name="resetScale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetScale"></a>

```typescript
public resetScale(): void
```

##### `resetServiceRegistries` <a name="resetServiceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetServiceRegistries"></a>

```typescript
public resetServiceRegistries(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWaitUntilStable` <a name="resetWaitUntilStable" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStable"></a>

```typescript
public resetWaitUntilStable(): void
```

##### `resetWaitUntilStableTimeout` <a name="resetWaitUntilStableTimeout" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.resetWaitUntilStableTimeout"></a>

```typescript
public resetWaitUntilStableTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isConstruct"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

ecsTaskSet.EcsTaskSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformElement"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

ecsTaskSet.EcsTaskSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformResource"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

ecsTaskSet.EcsTaskSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList">EcsTaskSetLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scale">scale</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference">EcsTaskSetServiceRegistriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.stabilityStatus">stabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskSetId">taskSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchTypeInput">launchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancerInput">loadBalancerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scaleInput">scaleInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput">serviceRegistriesInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableInput">waitUntilStableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeoutInput">waitUntilStableTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStable">waitUntilStable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeout">waitUntilStableTimeout</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: EcsTaskSetCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: EcsTaskSetLoadBalancerList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList">EcsTaskSetLoadBalancerList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: EcsTaskSetNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a>

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scale"></a>

```typescript
public readonly scale: EcsTaskSetScaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a>

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistries"></a>

```typescript
public readonly serviceRegistries: EcsTaskSetServiceRegistriesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference">EcsTaskSetServiceRegistriesOutputReference</a>

---

##### `stabilityStatus`<sup>Required</sup> <a name="stabilityStatus" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.stabilityStatus"></a>

```typescript
public readonly stabilityStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taskSetId`<sup>Required</sup> <a name="taskSetId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskSetId"></a>

```typescript
public readonly taskSetId: string;
```

- *Type:* string

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput"></a>

```typescript
public readonly capacityProviderStrategyInput: IResolvable | EcsTaskSetCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchTypeInput"></a>

```typescript
public readonly launchTypeInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: IResolvable | EcsTaskSetLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>[]

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: EcsTaskSetNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.scaleInput"></a>

```typescript
public readonly scaleInput: EcsTaskSetScale;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceRegistriesInput`<sup>Optional</sup> <a name="serviceRegistriesInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput"></a>

```typescript
public readonly serviceRegistriesInput: EcsTaskSetServiceRegistries;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput"></a>

```typescript
public readonly taskDefinitionInput: string;
```

- *Type:* string

---

##### `waitUntilStableInput`<sup>Optional</sup> <a name="waitUntilStableInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableInput"></a>

```typescript
public readonly waitUntilStableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitUntilStableTimeoutInput`<sup>Optional</sup> <a name="waitUntilStableTimeoutInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeoutInput"></a>

```typescript
public readonly waitUntilStableTimeoutInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

---

##### `waitUntilStable`<sup>Required</sup> <a name="waitUntilStable" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStable"></a>

```typescript
public readonly waitUntilStable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitUntilStableTimeout`<sup>Required</sup> <a name="waitUntilStableTimeout" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.waitUntilStableTimeout"></a>

```typescript
public readonly waitUntilStableTimeout: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskSetCapacityProviderStrategy <a name="EcsTaskSetCapacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

const ecsTaskSetCapacityProviderStrategy: ecsTaskSet.EcsTaskSetCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#weight EcsTaskSet#weight}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#base EcsTaskSet#base}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#weight EcsTaskSet#weight}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#base EcsTaskSet#base}.

---

### EcsTaskSetConfig <a name="EcsTaskSetConfig" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

const ecsTaskSetConfig: ecsTaskSet.EcsTaskSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.cluster">cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#cluster EcsTaskSet#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service EcsTaskSet#service}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#task_definition EcsTaskSet#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#external_id EcsTaskSet#external_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#force_delete EcsTaskSet#force_delete}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#id EcsTaskSet#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.launchType">launchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#launch_type EcsTaskSet#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.loadBalancer">loadBalancer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>[]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.platformVersion">platformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#platform_version EcsTaskSet#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.scale">scale</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | scale block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags EcsTaskSet#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags_all EcsTaskSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStable">waitUntilStable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable EcsTaskSet#wait_until_stable}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStableTimeout">waitUntilStableTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#cluster EcsTaskSet#cluster}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service EcsTaskSet#service}.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#task_definition EcsTaskSet#task_definition}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: IResolvable | EcsTaskSetCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#external_id EcsTaskSet#external_id}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#force_delete EcsTaskSet#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#id EcsTaskSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#launch_type EcsTaskSet#launch_type}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IResolvable | EcsTaskSetLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>[]

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#load_balancer EcsTaskSet#load_balancer}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: EcsTaskSetNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#network_configuration EcsTaskSet#network_configuration}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#platform_version EcsTaskSet#platform_version}.

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.scale"></a>

```typescript
public readonly scale: EcsTaskSetScale;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

scale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#scale EcsTaskSet#scale}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries"></a>

```typescript
public readonly serviceRegistries: EcsTaskSetServiceRegistries;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#service_registries EcsTaskSet#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags EcsTaskSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#tags_all EcsTaskSet#tags_all}.

---

##### `waitUntilStable`<sup>Optional</sup> <a name="waitUntilStable" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStable"></a>

```typescript
public readonly waitUntilStable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable EcsTaskSet#wait_until_stable}.

---

##### `waitUntilStableTimeout`<sup>Optional</sup> <a name="waitUntilStableTimeout" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetConfig.property.waitUntilStableTimeout"></a>

```typescript
public readonly waitUntilStableTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}.

---

### EcsTaskSetLoadBalancer <a name="EcsTaskSetLoadBalancer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

const ecsTaskSetLoadBalancer: ecsTaskSet.EcsTaskSetLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerPort">containerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#load_balancer_name EcsTaskSet#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#target_group_arn EcsTaskSet#target_group_arn}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}.

---

##### `loadBalancerName`<sup>Optional</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#load_balancer_name EcsTaskSet#load_balancer_name}.

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#target_group_arn EcsTaskSet#target_group_arn}.

---

### EcsTaskSetNetworkConfiguration <a name="EcsTaskSetNetworkConfiguration" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

const ecsTaskSetNetworkConfiguration: ecsTaskSet.EcsTaskSetNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#subnets EcsTaskSet#subnets}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#assign_public_ip EcsTaskSet#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#security_groups EcsTaskSet#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#subnets EcsTaskSet#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#assign_public_ip EcsTaskSet#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#security_groups EcsTaskSet#security_groups}.

---

### EcsTaskSetScale <a name="EcsTaskSetScale" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

const ecsTaskSetScale: ecsTaskSet.EcsTaskSetScale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#unit EcsTaskSet#unit}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#value EcsTaskSet#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#unit EcsTaskSet#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#value EcsTaskSet#value}.

---

### EcsTaskSetServiceRegistries <a name="EcsTaskSetServiceRegistries" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

const ecsTaskSetServiceRegistries: ecsTaskSet.EcsTaskSetServiceRegistries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn">registryArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#registry_arn EcsTaskSet#registry_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort">containerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#port EcsTaskSet#port}. |

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#registry_arn EcsTaskSet#registry_arn}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_name EcsTaskSet#container_name}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#container_port EcsTaskSet#container_port}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set#port EcsTaskSet#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskSetCapacityProviderStrategyList <a name="EcsTaskSetCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSetCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): EcsTaskSetCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsTaskSetCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

---


### EcsTaskSetCapacityProviderStrategyOutputReference <a name="EcsTaskSetCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskSetCapacityProviderStrategy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a> | cdktf.IResolvable

---


### EcsTaskSetLoadBalancerList <a name="EcsTaskSetLoadBalancerList" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSetLoadBalancerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.get"></a>

```typescript
public get(index: number): EcsTaskSetLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsTaskSetLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a>[]

---


### EcsTaskSetLoadBalancerOutputReference <a name="EcsTaskSetLoadBalancerOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSetLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetLoadBalancerName">resetLoadBalancerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetLoadBalancerName` <a name="resetLoadBalancerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetLoadBalancerName"></a>

```typescript
public resetLoadBalancerName(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerNameInput"></a>

```typescript
public readonly loadBalancerNameInput: string;
```

- *Type:* string

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskSetLoadBalancer | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetLoadBalancer">EcsTaskSetLoadBalancer</a> | cdktf.IResolvable

---


### EcsTaskSetNetworkConfigurationOutputReference <a name="EcsTaskSetNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskSetNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---


### EcsTaskSetScaleOutputReference <a name="EcsTaskSetScaleOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSetScaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskSetScale;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---


### EcsTaskSetServiceRegistriesOutputReference <a name="EcsTaskSetServiceRegistriesOutputReference" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer"></a>

```typescript
import { ecsTaskSet } from '@cdktf/provider-aws'

new ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput">registryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `registryArnInput`<sup>Optional</sup> <a name="registryArnInput" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput"></a>

```typescript
public readonly registryArnInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskSetServiceRegistries;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---



