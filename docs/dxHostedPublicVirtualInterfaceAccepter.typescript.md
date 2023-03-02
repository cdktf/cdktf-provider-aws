# `dxHostedPublicVirtualInterfaceAccepter` Submodule <a name="`dxHostedPublicVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPublicVirtualInterfaceAccepter <a name="DxHostedPublicVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter aws_dx_hosted_public_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer"></a>

```typescript
import { dxHostedPublicVirtualInterfaceAccepter } from '@cdktf/provider-aws'

new dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter(scope: Construct, id: string, config: DxHostedPublicVirtualInterfaceAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig">DxHostedPublicVirtualInterfaceAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig">DxHostedPublicVirtualInterfaceAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts"></a>

```typescript
public putTimeouts(value: DxHostedPublicVirtualInterfaceAccepterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct"></a>

```typescript
import { dxHostedPublicVirtualInterfaceAccepter } from '@cdktf/provider-aws'

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement"></a>

```typescript
import { dxHostedPublicVirtualInterfaceAccepter } from '@cdktf/provider-aws'

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource"></a>

```typescript
import { dxHostedPublicVirtualInterfaceAccepter } from '@cdktf/provider-aws'

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceIdInput">virtualInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeouts"></a>

```typescript
public readonly timeouts: DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DxHostedPublicVirtualInterfaceAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a> | cdktf.IResolvable

---

##### `virtualInterfaceIdInput`<sup>Optional</sup> <a name="virtualInterfaceIdInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```typescript
public readonly virtualInterfaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPublicVirtualInterfaceAccepterConfig <a name="DxHostedPublicVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.Initializer"></a>

```typescript
import { dxHostedPublicVirtualInterfaceAccepter } from '@cdktf/provider-aws'

const dxHostedPublicVirtualInterfaceAccepterConfig: dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DxHostedPublicVirtualInterfaceAccepterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#timeouts DxHostedPublicVirtualInterfaceAccepter#timeouts}

---

### DxHostedPublicVirtualInterfaceAccepterTimeouts <a name="DxHostedPublicVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.Initializer"></a>

```typescript
import { dxHostedPublicVirtualInterfaceAccepter } from '@cdktf/provider-aws'

const dxHostedPublicVirtualInterfaceAccepterTimeouts: dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#create DxHostedPublicVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#delete DxHostedPublicVirtualInterfaceAccepter#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#create DxHostedPublicVirtualInterfaceAccepter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#delete DxHostedPublicVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```typescript
import { dxHostedPublicVirtualInterfaceAccepter } from '@cdktf/provider-aws'

new dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DxHostedPublicVirtualInterfaceAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a> | cdktf.IResolvable

---



