# `directoryServiceSharedDirectoryAccepter` Submodule <a name="`directoryServiceSharedDirectoryAccepter` Submodule" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceSharedDirectoryAccepter <a name="DirectoryServiceSharedDirectoryAccepter" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter aws_directory_service_shared_directory_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer"></a>

```typescript
import { directoryServiceSharedDirectoryAccepter } from '@cdktf/provider-aws'

new directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter(scope: Construct, id: string, config: DirectoryServiceSharedDirectoryAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig">DirectoryServiceSharedDirectoryAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig">DirectoryServiceSharedDirectoryAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.putTimeouts"></a>

```typescript
public putTimeouts(value: DirectoryServiceSharedDirectoryAccepterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isConstruct"></a>

```typescript
import { directoryServiceSharedDirectoryAccepter } from '@cdktf/provider-aws'

directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformElement"></a>

```typescript
import { directoryServiceSharedDirectoryAccepter } from '@cdktf/provider-aws'

directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformResource"></a>

```typescript
import { directoryServiceSharedDirectoryAccepter } from '@cdktf/provider-aws'

directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerDirectoryId">ownerDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference">DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryIdInput">sharedDirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryId">sharedDirectoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `ownerDirectoryId`<sup>Required</sup> <a name="ownerDirectoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerDirectoryId"></a>

```typescript
public readonly ownerDirectoryId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference">DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sharedDirectoryIdInput`<sup>Optional</sup> <a name="sharedDirectoryIdInput" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryIdInput"></a>

```typescript
public readonly sharedDirectoryIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DirectoryServiceSharedDirectoryAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sharedDirectoryId`<sup>Required</sup> <a name="sharedDirectoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryId"></a>

```typescript
public readonly sharedDirectoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceSharedDirectoryAccepterConfig <a name="DirectoryServiceSharedDirectoryAccepterConfig" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.Initializer"></a>

```typescript
import { directoryServiceSharedDirectoryAccepter } from '@cdktf/provider-aws'

const directoryServiceSharedDirectoryAccepterConfig: directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.sharedDirectoryId">sharedDirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#shared_directory_id DirectoryServiceSharedDirectoryAccepter#shared_directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#id DirectoryServiceSharedDirectoryAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sharedDirectoryId`<sup>Required</sup> <a name="sharedDirectoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.sharedDirectoryId"></a>

```typescript
public readonly sharedDirectoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#shared_directory_id DirectoryServiceSharedDirectoryAccepter#shared_directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#id DirectoryServiceSharedDirectoryAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceSharedDirectoryAccepterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#timeouts DirectoryServiceSharedDirectoryAccepter#timeouts}

---

### DirectoryServiceSharedDirectoryAccepterTimeouts <a name="DirectoryServiceSharedDirectoryAccepterTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.Initializer"></a>

```typescript
import { directoryServiceSharedDirectoryAccepter } from '@cdktf/provider-aws'

const directoryServiceSharedDirectoryAccepterTimeouts: directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#create DirectoryServiceSharedDirectoryAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#delete DirectoryServiceSharedDirectoryAccepter#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#create DirectoryServiceSharedDirectoryAccepter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#delete DirectoryServiceSharedDirectoryAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference <a name="DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer"></a>

```typescript
import { directoryServiceSharedDirectoryAccepter } from '@cdktf/provider-aws'

new directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DirectoryServiceSharedDirectoryAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a> | cdktf.IResolvable

---



