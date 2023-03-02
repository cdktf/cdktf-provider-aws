# `globalacceleratorEndpointGroup` Submodule <a name="`globalacceleratorEndpointGroup` Submodule" id="@cdktf/provider-aws.globalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorEndpointGroup <a name="GlobalacceleratorEndpointGroup" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

new globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup(scope: Construct, id: string, config: GlobalacceleratorEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride">putPortOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion">resetEndpointGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds">resetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort">resetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol">resetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride">resetPortOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount">resetThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage">resetTrafficDialPercentage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration"></a>

```typescript
public putEndpointConfiguration(value: IResolvable | GlobalacceleratorEndpointGroupEndpointConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>[]

---

##### `putPortOverride` <a name="putPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride"></a>

```typescript
public putPortOverride(value: IResolvable | GlobalacceleratorEndpointGroupPortOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GlobalacceleratorEndpointGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

---

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration"></a>

```typescript
public resetEndpointConfiguration(): void
```

##### `resetEndpointGroupRegion` <a name="resetEndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion"></a>

```typescript
public resetEndpointGroupRegion(): void
```

##### `resetHealthCheckIntervalSeconds` <a name="resetHealthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds"></a>

```typescript
public resetHealthCheckIntervalSeconds(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetHealthCheckPort` <a name="resetHealthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort"></a>

```typescript
public resetHealthCheckPort(): void
```

##### `resetHealthCheckProtocol` <a name="resetHealthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol"></a>

```typescript
public resetHealthCheckProtocol(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPortOverride` <a name="resetPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride"></a>

```typescript
public resetPortOverride(): void
```

##### `resetThresholdCount` <a name="resetThresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount"></a>

```typescript
public resetThresholdCount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficDialPercentage` <a name="resetTrafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage"></a>

```typescript
public resetTrafficDialPercentage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride">portOverride</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput">endpointGroupRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput">healthCheckIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput">healthCheckPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput">healthCheckProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput">listenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput">portOverrideInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput">thresholdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput">trafficDialPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion">endpointGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort">healthCheckPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn">listenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount">thresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: GlobalacceleratorEndpointGroupEndpointConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a>

---

##### `portOverride`<sup>Required</sup> <a name="portOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride"></a>

```typescript
public readonly portOverride: GlobalacceleratorEndpointGroupPortOverrideList;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalacceleratorEndpointGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a>

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput"></a>

```typescript
public readonly endpointConfigurationInput: IResolvable | GlobalacceleratorEndpointGroupEndpointConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>[]

---

##### `endpointGroupRegionInput`<sup>Optional</sup> <a name="endpointGroupRegionInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput"></a>

```typescript
public readonly endpointGroupRegionInput: string;
```

- *Type:* string

---

##### `healthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="healthCheckIntervalSecondsInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput"></a>

```typescript
public readonly healthCheckIntervalSecondsInput: number;
```

- *Type:* number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `healthCheckPortInput`<sup>Optional</sup> <a name="healthCheckPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput"></a>

```typescript
public readonly healthCheckPortInput: number;
```

- *Type:* number

---

##### `healthCheckProtocolInput`<sup>Optional</sup> <a name="healthCheckProtocolInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput"></a>

```typescript
public readonly healthCheckProtocolInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenerArnInput`<sup>Optional</sup> <a name="listenerArnInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput"></a>

```typescript
public readonly listenerArnInput: string;
```

- *Type:* string

---

##### `portOverrideInput`<sup>Optional</sup> <a name="portOverrideInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput"></a>

```typescript
public readonly portOverrideInput: IResolvable | GlobalacceleratorEndpointGroupPortOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>[]

---

##### `thresholdCountInput`<sup>Optional</sup> <a name="thresholdCountInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput"></a>

```typescript
public readonly thresholdCountInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GlobalacceleratorEndpointGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> | cdktf.IResolvable

---

##### `trafficDialPercentageInput`<sup>Optional</sup> <a name="trafficDialPercentageInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput"></a>

```typescript
public readonly trafficDialPercentageInput: number;
```

- *Type:* number

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="endpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```typescript
public readonly endpointGroupRegion: string;
```

- *Type:* string

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```typescript
public readonly healthCheckIntervalSeconds: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `healthCheckPort`<sup>Required</sup> <a name="healthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```typescript
public readonly healthCheckPort: number;
```

- *Type:* number

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="healthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```typescript
public readonly healthCheckProtocol: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

---

##### `thresholdCount`<sup>Required</sup> <a name="thresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```typescript
public readonly thresholdCount: number;
```

- *Type:* number

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```typescript
public readonly trafficDialPercentage: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorEndpointGroupConfig <a name="GlobalacceleratorEndpointGroupConfig" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

const globalacceleratorEndpointGroupConfig: globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn">listenerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>[]</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion">endpointGroupRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort">healthCheckPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride">portOverride</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>[]</code> | port_override block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount">thresholdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: IResolvable | GlobalacceleratorEndpointGroupEndpointConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>[]

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}

---

##### `endpointGroupRegion`<sup>Optional</sup> <a name="endpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion"></a>

```typescript
public readonly endpointGroupRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}.

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds"></a>

```typescript
public readonly healthCheckIntervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `healthCheckPort`<sup>Optional</sup> <a name="healthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort"></a>

```typescript
public readonly healthCheckPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}.

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="healthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol"></a>

```typescript
public readonly healthCheckProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `portOverride`<sup>Optional</sup> <a name="portOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride"></a>

```typescript
public readonly portOverride: IResolvable | GlobalacceleratorEndpointGroupPortOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>[]

port_override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#port_override GlobalacceleratorEndpointGroup#port_override}

---

##### `thresholdCount`<sup>Optional</sup> <a name="thresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount"></a>

```typescript
public readonly thresholdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalacceleratorEndpointGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#timeouts GlobalacceleratorEndpointGroup#timeouts}

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="trafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage"></a>

```typescript
public readonly trafficDialPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}.

---

### GlobalacceleratorEndpointGroupEndpointConfiguration <a name="GlobalacceleratorEndpointGroupEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

const globalacceleratorEndpointGroupEndpointConfiguration: globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled">clientIpPreservationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}. |

---

##### `clientIpPreservationEnabled`<sup>Optional</sup> <a name="clientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled"></a>

```typescript
public readonly clientIpPreservationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}.

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}.

---

### GlobalacceleratorEndpointGroupPortOverride <a name="GlobalacceleratorEndpointGroupPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

const globalacceleratorEndpointGroupPortOverride: globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort">endpointPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort">listenerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}. |

---

##### `endpointPort`<sup>Required</sup> <a name="endpointPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort"></a>

```typescript
public readonly endpointPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}.

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}.

---

### GlobalacceleratorEndpointGroupTimeouts <a name="GlobalacceleratorEndpointGroupTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

const globalacceleratorEndpointGroupTimeouts: globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorEndpointGroupEndpointConfigurationList <a name="GlobalacceleratorEndpointGroupEndpointConfigurationList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

new globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get"></a>

```typescript
public get(index: number): GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorEndpointGroupEndpointConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>[]

---


### GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference <a name="GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

new globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled">resetClientIpPreservationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId">resetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientIpPreservationEnabled` <a name="resetClientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled"></a>

```typescript
public resetClientIpPreservationEnabled(): void
```

##### `resetEndpointId` <a name="resetEndpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId"></a>

```typescript
public resetEndpointId(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput">clientIpPreservationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled">clientIpPreservationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIpPreservationEnabledInput`<sup>Optional</sup> <a name="clientIpPreservationEnabledInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput"></a>

```typescript
public readonly clientIpPreservationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `clientIpPreservationEnabled`<sup>Required</sup> <a name="clientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled"></a>

```typescript
public readonly clientIpPreservationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlobalacceleratorEndpointGroupEndpointConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a> | cdktf.IResolvable

---


### GlobalacceleratorEndpointGroupPortOverrideList <a name="GlobalacceleratorEndpointGroupPortOverrideList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

new globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get"></a>

```typescript
public get(index: number): GlobalacceleratorEndpointGroupPortOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorEndpointGroupPortOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>[]

---


### GlobalacceleratorEndpointGroupPortOverrideOutputReference <a name="GlobalacceleratorEndpointGroupPortOverrideOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

new globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput">endpointPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput">listenerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort">endpointPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointPortInput`<sup>Optional</sup> <a name="endpointPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput"></a>

```typescript
public readonly endpointPortInput: number;
```

- *Type:* number

---

##### `listenerPortInput`<sup>Optional</sup> <a name="listenerPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput"></a>

```typescript
public readonly listenerPortInput: number;
```

- *Type:* number

---

##### `endpointPort`<sup>Required</sup> <a name="endpointPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort"></a>

```typescript
public readonly endpointPort: number;
```

- *Type:* number

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlobalacceleratorEndpointGroupPortOverride | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a> | cdktf.IResolvable

---


### GlobalacceleratorEndpointGroupTimeoutsOutputReference <a name="GlobalacceleratorEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { globalacceleratorEndpointGroup } from '@cdktf/provider-aws'

new globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlobalacceleratorEndpointGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> | cdktf.IResolvable

---



