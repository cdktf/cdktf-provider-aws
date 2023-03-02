# `vpcPeeringConnectionOptions` Submodule <a name="`vpcPeeringConnectionOptions` Submodule" id="@cdktf/provider-aws.vpcPeeringConnectionOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionOptions <a name="VpcPeeringConnectionOptions" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options aws_vpc_peering_connection_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

new vpcPeeringConnectionOptions.VpcPeeringConnectionOptions(scope: Construct, id: string, config: VpcPeeringConnectionOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig">VpcPeeringConnectionOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig">VpcPeeringConnectionOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter">putAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester">putRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetAccepter">resetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetRequester">resetRequester</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccepter` <a name="putAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter"></a>

```typescript
public putAccepter(value: VpcPeeringConnectionOptionsAccepter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---

##### `putRequester` <a name="putRequester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester"></a>

```typescript
public putRequester(value: VpcPeeringConnectionOptionsRequester): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---

##### `resetAccepter` <a name="resetAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetAccepter"></a>

```typescript
public resetAccepter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequester` <a name="resetRequester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetRequester"></a>

```typescript
public resetRequester(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference">VpcPeeringConnectionOptionsAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference">VpcPeeringConnectionOptionsRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepterInput">accepterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requesterInput">requesterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accepter`<sup>Required</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepter"></a>

```typescript
public readonly accepter: VpcPeeringConnectionOptionsAccepterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference">VpcPeeringConnectionOptionsAccepterOutputReference</a>

---

##### `requester`<sup>Required</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requester"></a>

```typescript
public readonly requester: VpcPeeringConnectionOptionsRequesterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference">VpcPeeringConnectionOptionsRequesterOutputReference</a>

---

##### `accepterInput`<sup>Optional</sup> <a name="accepterInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepterInput"></a>

```typescript
public readonly accepterInput: VpcPeeringConnectionOptionsAccepter;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `requesterInput`<sup>Optional</sup> <a name="requesterInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requesterInput"></a>

```typescript
public readonly requesterInput: VpcPeeringConnectionOptionsRequester;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionIdInput"></a>

```typescript
public readonly vpcPeeringConnectionIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionOptionsAccepter <a name="VpcPeeringConnectionOptionsAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.Initializer"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

const vpcPeeringConnectionOptionsAccepter: vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}. |

---

##### `allowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

##### `allowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

##### `allowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionOptionsConfig <a name="VpcPeeringConnectionOptionsConfig" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.Initializer"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

const vpcPeeringConnectionOptionsConfig: vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | requester block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.accepter"></a>

```typescript
public readonly accepter: VpcPeeringConnectionOptionsAccepter;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#accepter VpcPeeringConnectionOptions#accepter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.requester"></a>

```typescript
public readonly requester: VpcPeeringConnectionOptionsRequester;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#requester VpcPeeringConnectionOptions#requester}

---

### VpcPeeringConnectionOptionsRequester <a name="VpcPeeringConnectionOptionsRequester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.Initializer"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

const vpcPeeringConnectionOptionsRequester: vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}. |

---

##### `allowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

##### `allowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

##### `allowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionOptionsAccepterOutputReference <a name="VpcPeeringConnectionOptionsAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

new vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">resetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowRemoteVpcDnsResolution">resetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowVpcToRemoteClassicLink">resetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowClassicLinkToRemoteVpc` <a name="resetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```typescript
public resetAllowClassicLinkToRemoteVpc(): void
```

##### `resetAllowRemoteVpcDnsResolution` <a name="resetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```typescript
public resetAllowRemoteVpcDnsResolution(): void
```

##### `resetAllowVpcToRemoteClassicLink` <a name="resetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```typescript
public resetAllowVpcToRemoteClassicLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">allowClassicLinkToRemoteVpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">allowRemoteVpcDnsResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">allowVpcToRemoteClassicLinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```typescript
public readonly allowClassicLinkToRemoteVpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```typescript
public readonly allowRemoteVpcDnsResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```typescript
public readonly allowVpcToRemoteClassicLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolution`<sup>Required</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLink`<sup>Required</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcPeeringConnectionOptionsAccepter;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---


### VpcPeeringConnectionOptionsRequesterOutputReference <a name="VpcPeeringConnectionOptionsRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnectionOptions } from '@cdktf/provider-aws'

new vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">resetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowRemoteVpcDnsResolution">resetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowVpcToRemoteClassicLink">resetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowClassicLinkToRemoteVpc` <a name="resetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```typescript
public resetAllowClassicLinkToRemoteVpc(): void
```

##### `resetAllowRemoteVpcDnsResolution` <a name="resetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```typescript
public resetAllowRemoteVpcDnsResolution(): void
```

##### `resetAllowVpcToRemoteClassicLink` <a name="resetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```typescript
public resetAllowVpcToRemoteClassicLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">allowClassicLinkToRemoteVpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">allowRemoteVpcDnsResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">allowVpcToRemoteClassicLinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```typescript
public readonly allowClassicLinkToRemoteVpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```typescript
public readonly allowRemoteVpcDnsResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```typescript
public readonly allowVpcToRemoteClassicLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolution`<sup>Required</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLink`<sup>Required</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcPeeringConnectionOptionsRequester;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---



