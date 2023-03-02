# `opensearchInboundConnectionAccepter` Submodule <a name="`opensearchInboundConnectionAccepter` Submodule" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchInboundConnectionAccepter <a name="OpensearchInboundConnectionAccepter" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter aws_opensearch_inbound_connection_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.Initializer"></a>

```typescript
import { opensearchInboundConnectionAccepter } from '@cdktf/provider-aws'

new opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter(scope: Construct, id: string, config: OpensearchInboundConnectionAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig">OpensearchInboundConnectionAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig">OpensearchInboundConnectionAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.putTimeouts"></a>

```typescript
public putTimeouts(value: OpensearchInboundConnectionAccepterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts">OpensearchInboundConnectionAccepterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isConstruct"></a>

```typescript
import { opensearchInboundConnectionAccepter } from '@cdktf/provider-aws'

opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformElement"></a>

```typescript
import { opensearchInboundConnectionAccepter } from '@cdktf/provider-aws'

opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformResource"></a>

```typescript
import { opensearchInboundConnectionAccepter } from '@cdktf/provider-aws'

opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connectionStatus">connectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference">OpensearchInboundConnectionAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts">OpensearchInboundConnectionAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connectionStatus"></a>

```typescript
public readonly connectionStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchInboundConnectionAccepterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference">OpensearchInboundConnectionAccepterTimeoutsOutputReference</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: OpensearchInboundConnectionAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts">OpensearchInboundConnectionAccepterTimeouts</a> | cdktf.IResolvable

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchInboundConnectionAccepterConfig <a name="OpensearchInboundConnectionAccepterConfig" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.Initializer"></a>

```typescript
import { opensearchInboundConnectionAccepter } from '@cdktf/provider-aws'

const opensearchInboundConnectionAccepterConfig: opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#connection_id OpensearchInboundConnectionAccepter#connection_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#id OpensearchInboundConnectionAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts">OpensearchInboundConnectionAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#connection_id OpensearchInboundConnectionAccepter#connection_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#id OpensearchInboundConnectionAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchInboundConnectionAccepterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts">OpensearchInboundConnectionAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#timeouts OpensearchInboundConnectionAccepter#timeouts}

---

### OpensearchInboundConnectionAccepterTimeouts <a name="OpensearchInboundConnectionAccepterTimeouts" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts.Initializer"></a>

```typescript
import { opensearchInboundConnectionAccepter } from '@cdktf/provider-aws'

const opensearchInboundConnectionAccepterTimeouts: opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#create OpensearchInboundConnectionAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#delete OpensearchInboundConnectionAccepter#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#create OpensearchInboundConnectionAccepter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_inbound_connection_accepter#delete OpensearchInboundConnectionAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchInboundConnectionAccepterTimeoutsOutputReference <a name="OpensearchInboundConnectionAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.Initializer"></a>

```typescript
import { opensearchInboundConnectionAccepter } from '@cdktf/provider-aws'

new opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts">OpensearchInboundConnectionAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchInboundConnectionAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchInboundConnectionAccepter.OpensearchInboundConnectionAccepterTimeouts">OpensearchInboundConnectionAccepterTimeouts</a> | cdktf.IResolvable

---



