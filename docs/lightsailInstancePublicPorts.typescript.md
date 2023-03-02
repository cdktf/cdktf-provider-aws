# `lightsailInstancePublicPorts` Submodule <a name="`lightsailInstancePublicPorts` Submodule" id="@cdktf/provider-aws.lightsailInstancePublicPorts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstancePublicPorts <a name="LightsailInstancePublicPorts" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports aws_lightsail_instance_public_ports}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

new lightsailInstancePublicPorts.LightsailInstancePublicPorts(scope: Construct, id: string, config: LightsailInstancePublicPortsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig">LightsailInstancePublicPortsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig">LightsailInstancePublicPortsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo">putPortInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPortInfo` <a name="putPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo"></a>

```typescript
public putPortInfo(value: IResolvable | LightsailInstancePublicPortsPortInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo">portInfo</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput">portInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `portInfo`<sup>Required</sup> <a name="portInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo"></a>

```typescript
public readonly portInfo: LightsailInstancePublicPortsPortInfoList;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `portInfoInput`<sup>Optional</sup> <a name="portInfoInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput"></a>

```typescript
public readonly portInfoInput: IResolvable | LightsailInstancePublicPortsPortInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstancePublicPortsConfig <a name="LightsailInstancePublicPortsConfig" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.Initializer"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

const lightsailInstancePublicPortsConfig: lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo">portInfo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>[]</code> | port_info block. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}.

---

##### `portInfo`<sup>Required</sup> <a name="portInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo"></a>

```typescript
public readonly portInfo: IResolvable | LightsailInstancePublicPortsPortInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>[]

port_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LightsailInstancePublicPortsPortInfo <a name="LightsailInstancePublicPortsPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.Initializer"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

const lightsailInstancePublicPortsPortInfo: lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases">cidrListAliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs">cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs">ipv6Cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}. |

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}.

---

##### `cidrListAliases`<sup>Optional</sup> <a name="cidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases"></a>

```typescript
public readonly cidrListAliases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}.

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}.

---

##### `ipv6Cidrs`<sup>Optional</sup> <a name="ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs"></a>

```typescript
public readonly ipv6Cidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstancePublicPortsPortInfoList <a name="LightsailInstancePublicPortsPortInfoList" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

new lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get"></a>

```typescript
public get(index: number): LightsailInstancePublicPortsPortInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailInstancePublicPortsPortInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>[]

---


### LightsailInstancePublicPortsPortInfoOutputReference <a name="LightsailInstancePublicPortsPortInfoOutputReference" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer"></a>

```typescript
import { lightsailInstancePublicPorts } from '@cdktf/provider-aws'

new lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases">resetCidrListAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs">resetIpv6Cidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrListAliases` <a name="resetCidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases"></a>

```typescript
public resetCidrListAliases(): void
```

##### `resetCidrs` <a name="resetCidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs"></a>

```typescript
public resetCidrs(): void
```

##### `resetIpv6Cidrs` <a name="resetIpv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs"></a>

```typescript
public resetIpv6Cidrs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput">cidrListAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput">ipv6CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases">cidrListAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs">ipv6Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrListAliasesInput`<sup>Optional</sup> <a name="cidrListAliasesInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput"></a>

```typescript
public readonly cidrListAliasesInput: string[];
```

- *Type:* string[]

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput"></a>

```typescript
public readonly cidrsInput: string[];
```

- *Type:* string[]

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipv6CidrsInput`<sup>Optional</sup> <a name="ipv6CidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput"></a>

```typescript
public readonly ipv6CidrsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrListAliases`<sup>Required</sup> <a name="cidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases"></a>

```typescript
public readonly cidrListAliases: string[];
```

- *Type:* string[]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipv6Cidrs`<sup>Required</sup> <a name="ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs"></a>

```typescript
public readonly ipv6Cidrs: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailInstancePublicPortsPortInfo | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a> | cdktf.IResolvable

---



