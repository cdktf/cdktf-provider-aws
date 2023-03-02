# `ecsCluster` Submodule <a name="`ecsCluster` Submodule" id="@cdktf/provider-aws.ecsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsCluster <a name="EcsCluster" id="@cdktf/provider-aws.ecsCluster.EcsCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster aws_ecs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsCluster(scope: Construct, id: string, config: EcsClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig">EcsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig">EcsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putDefaultCapacityProviderStrategy">putDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults">putServiceConnectDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting">putSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetCapacityProviders">resetCapacityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetDefaultCapacityProviderStrategy">resetDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetServiceConnectDefaults">resetServiceConnectDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetSetting">resetSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration"></a>

```typescript
public putConfiguration(value: EcsClusterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---

##### `putDefaultCapacityProviderStrategy` <a name="putDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putDefaultCapacityProviderStrategy"></a>

```typescript
public putDefaultCapacityProviderStrategy(value: IResolvable | EcsClusterDefaultCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a>[]

---

##### `putServiceConnectDefaults` <a name="putServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults"></a>

```typescript
public putServiceConnectDefaults(value: EcsClusterServiceConnectDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---

##### `putSetting` <a name="putSetting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting"></a>

```typescript
public putSetting(value: IResolvable | EcsClusterSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>[]

---

##### `resetCapacityProviders` <a name="resetCapacityProviders" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetCapacityProviders"></a>

```typescript
public resetCapacityProviders(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDefaultCapacityProviderStrategy` <a name="resetDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetDefaultCapacityProviderStrategy"></a>

```typescript
public resetDefaultCapacityProviderStrategy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServiceConnectDefaults` <a name="resetServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetServiceConnectDefaults"></a>

```typescript
public resetServiceConnectDefaults(): void
```

##### `resetSetting` <a name="resetSetting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetSetting"></a>

```typescript
public resetSetting(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

ecsCluster.EcsCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

ecsCluster.EcsCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

ecsCluster.EcsCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference">EcsClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList">EcsClusterDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaults">serviceConnectDefaults</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference">EcsClusterServiceConnectDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.setting">setting</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList">EcsClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProvidersInput">capacityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategyInput">defaultCapacityProviderStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaultsInput">serviceConnectDefaultsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.settingInput">settingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProviders">capacityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.configuration"></a>

```typescript
public readonly configuration: EcsClusterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference">EcsClusterConfigurationOutputReference</a>

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategy"></a>

```typescript
public readonly defaultCapacityProviderStrategy: EcsClusterDefaultCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList">EcsClusterDefaultCapacityProviderStrategyList</a>

---

##### `serviceConnectDefaults`<sup>Required</sup> <a name="serviceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaults"></a>

```typescript
public readonly serviceConnectDefaults: EcsClusterServiceConnectDefaultsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference">EcsClusterServiceConnectDefaultsOutputReference</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.setting"></a>

```typescript
public readonly setting: EcsClusterSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList">EcsClusterSettingList</a>

---

##### `capacityProvidersInput`<sup>Optional</sup> <a name="capacityProvidersInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProvidersInput"></a>

```typescript
public readonly capacityProvidersInput: string[];
```

- *Type:* string[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.configurationInput"></a>

```typescript
public readonly configurationInput: EcsClusterConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---

##### `defaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="defaultCapacityProviderStrategyInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategyInput"></a>

```typescript
public readonly defaultCapacityProviderStrategyInput: IResolvable | EcsClusterDefaultCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceConnectDefaultsInput`<sup>Optional</sup> <a name="serviceConnectDefaultsInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaultsInput"></a>

```typescript
public readonly serviceConnectDefaultsInput: EcsClusterServiceConnectDefaults;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.settingInput"></a>

```typescript
public readonly settingInput: IResolvable | EcsClusterSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `capacityProviders`<sup>Required</sup> <a name="capacityProviders" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProviders"></a>

```typescript
public readonly capacityProviders: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterConfig <a name="EcsClusterConfig" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

const ecsClusterConfig: ecsCluster.EcsClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.capacityProviders">capacityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_providers EcsCluster#capacity_providers}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a>[]</code> | default_capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#id EcsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.serviceConnectDefaults">serviceConnectDefaults</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | service_connect_defaults block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.setting">setting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>[]</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags EcsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags_all EcsCluster#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}.

---

##### `capacityProviders`<sup>Optional</sup> <a name="capacityProviders" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.capacityProviders"></a>

```typescript
public readonly capacityProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_providers EcsCluster#capacity_providers}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.configuration"></a>

```typescript
public readonly configuration: EcsClusterConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#configuration EcsCluster#configuration}

---

##### `defaultCapacityProviderStrategy`<sup>Optional</sup> <a name="defaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.defaultCapacityProviderStrategy"></a>

```typescript
public readonly defaultCapacityProviderStrategy: IResolvable | EcsClusterDefaultCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a>[]

default_capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#id EcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceConnectDefaults`<sup>Optional</sup> <a name="serviceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.serviceConnectDefaults"></a>

```typescript
public readonly serviceConnectDefaults: EcsClusterServiceConnectDefaults;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

service_connect_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#service_connect_defaults EcsCluster#service_connect_defaults}

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.setting"></a>

```typescript
public readonly setting: IResolvable | EcsClusterSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>[]

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#setting EcsCluster#setting}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags EcsCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags_all EcsCluster#tags_all}.

---

### EcsClusterConfiguration <a name="EcsClusterConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

const ecsClusterConfiguration: ecsCluster.EcsClusterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.executeCommandConfiguration">executeCommandConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | execute_command_configuration block. |

---

##### `executeCommandConfiguration`<sup>Optional</sup> <a name="executeCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.executeCommandConfiguration"></a>

```typescript
public readonly executeCommandConfiguration: EcsClusterConfigurationExecuteCommandConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

execute_command_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#execute_command_configuration EcsCluster#execute_command_configuration}

---

### EcsClusterConfigurationExecuteCommandConfiguration <a name="EcsClusterConfigurationExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

const ecsClusterConfigurationExecuteCommandConfiguration: ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#kms_key_id EcsCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logging">logging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#logging EcsCluster#logging}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#kms_key_id EcsCluster#kms_key_id}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#log_configuration EcsCluster#log_configuration}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logging"></a>

```typescript
public readonly logging: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#logging EcsCluster#logging}.

---

### EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration <a name="EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

const ecsClusterConfigurationExecuteCommandConfigurationLogConfiguration: ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchEncryptionEnabled">cloudWatchEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchLogGroupName">cloudWatchLogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketEncryptionEnabled">s3BucketEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}. |

---

##### `cloudWatchEncryptionEnabled`<sup>Optional</sup> <a name="cloudWatchEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchEncryptionEnabled"></a>

```typescript
public readonly cloudWatchEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}.

---

##### `cloudWatchLogGroupName`<sup>Optional</sup> <a name="cloudWatchLogGroupName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchLogGroupName"></a>

```typescript
public readonly cloudWatchLogGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}.

---

##### `s3BucketEncryptionEnabled`<sup>Optional</sup> <a name="s3BucketEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketEncryptionEnabled"></a>

```typescript
public readonly s3BucketEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}.

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}.

---

### EcsClusterDefaultCapacityProviderStrategy <a name="EcsClusterDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

const ecsClusterDefaultCapacityProviderStrategy: ecsCluster.EcsClusterDefaultCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_provider EcsCluster#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#base EcsCluster#base}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#weight EcsCluster#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_provider EcsCluster#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#base EcsCluster#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#weight EcsCluster#weight}.

---

### EcsClusterServiceConnectDefaults <a name="EcsClusterServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

const ecsClusterServiceConnectDefaults: ecsCluster.EcsClusterServiceConnectDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#namespace EcsCluster#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#namespace EcsCluster#namespace}.

---

### EcsClusterSetting <a name="EcsClusterSetting" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

const ecsClusterSetting: ecsCluster.EcsClusterSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#value EcsCluster#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#value EcsCluster#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference <a name="EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchEncryptionEnabled">resetCloudWatchEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchLogGroupName">resetCloudWatchLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketEncryptionEnabled">resetS3BucketEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudWatchEncryptionEnabled` <a name="resetCloudWatchEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchEncryptionEnabled"></a>

```typescript
public resetCloudWatchEncryptionEnabled(): void
```

##### `resetCloudWatchLogGroupName` <a name="resetCloudWatchLogGroupName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchLogGroupName"></a>

```typescript
public resetCloudWatchLogGroupName(): void
```

##### `resetS3BucketEncryptionEnabled` <a name="resetS3BucketEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketEncryptionEnabled"></a>

```typescript
public resetS3BucketEncryptionEnabled(): void
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketName"></a>

```typescript
public resetS3BucketName(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabledInput">cloudWatchEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupNameInput">cloudWatchLogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabledInput">s3BucketEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabled">cloudWatchEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupName">cloudWatchLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabled">s3BucketEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudWatchEncryptionEnabledInput`<sup>Optional</sup> <a name="cloudWatchEncryptionEnabledInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabledInput"></a>

```typescript
public readonly cloudWatchEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudWatchLogGroupNameInput`<sup>Optional</sup> <a name="cloudWatchLogGroupNameInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupNameInput"></a>

```typescript
public readonly cloudWatchLogGroupNameInput: string;
```

- *Type:* string

---

##### `s3BucketEncryptionEnabledInput`<sup>Optional</sup> <a name="s3BucketEncryptionEnabledInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabledInput"></a>

```typescript
public readonly s3BucketEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `cloudWatchEncryptionEnabled`<sup>Required</sup> <a name="cloudWatchEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabled"></a>

```typescript
public readonly cloudWatchEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudWatchLogGroupName`<sup>Required</sup> <a name="cloudWatchLogGroupName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupName"></a>

```typescript
public readonly cloudWatchLogGroupName: string;
```

- *Type:* string

---

##### `s3BucketEncryptionEnabled`<sup>Required</sup> <a name="s3BucketEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabled"></a>

```typescript
public readonly s3BucketEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---


### EcsClusterConfigurationExecuteCommandConfigurationOutputReference <a name="EcsClusterConfigurationExecuteCommandConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogging">resetLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogging"></a>

```typescript
public resetLogging(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfigurationInput">logConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.loggingInput">loggingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logging">logging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.loggingInput"></a>

```typescript
public readonly loggingInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logging"></a>

```typescript
public readonly logging: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsClusterConfigurationExecuteCommandConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---


### EcsClusterConfigurationOutputReference <a name="EcsClusterConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration">putExecuteCommandConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetExecuteCommandConfiguration">resetExecuteCommandConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecuteCommandConfiguration` <a name="putExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration"></a>

```typescript
public putExecuteCommandConfiguration(value: EcsClusterConfigurationExecuteCommandConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---

##### `resetExecuteCommandConfiguration` <a name="resetExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetExecuteCommandConfiguration"></a>

```typescript
public resetExecuteCommandConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfiguration">executeCommandConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfigurationInput">executeCommandConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executeCommandConfiguration`<sup>Required</sup> <a name="executeCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfiguration"></a>

```typescript
public readonly executeCommandConfiguration: EcsClusterConfigurationExecuteCommandConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationOutputReference</a>

---

##### `executeCommandConfigurationInput`<sup>Optional</sup> <a name="executeCommandConfigurationInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfigurationInput"></a>

```typescript
public readonly executeCommandConfigurationInput: EcsClusterConfigurationExecuteCommandConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsClusterConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---


### EcsClusterDefaultCapacityProviderStrategyList <a name="EcsClusterDefaultCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterDefaultCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): EcsClusterDefaultCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsClusterDefaultCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a>[]

---


### EcsClusterDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterDefaultCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsClusterDefaultCapacityProviderStrategy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy">EcsClusterDefaultCapacityProviderStrategy</a> | cdktf.IResolvable

---


### EcsClusterServiceConnectDefaultsOutputReference <a name="EcsClusterServiceConnectDefaultsOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterServiceConnectDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsClusterServiceConnectDefaults;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---


### EcsClusterSettingList <a name="EcsClusterSettingList" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get"></a>

```typescript
public get(index: number): EcsClusterSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsClusterSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a>[]

---


### EcsClusterSettingOutputReference <a name="EcsClusterSettingOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer"></a>

```typescript
import { ecsCluster } from '@cdktf/provider-aws'

new ecsCluster.EcsClusterSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsClusterSetting | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting">EcsClusterSetting</a> | cdktf.IResolvable

---



