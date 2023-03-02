# `dxHostedPrivateVirtualInterfaceAccepter` Submodule <a name="`dxHostedPrivateVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPrivateVirtualInterfaceAccepter <a name="DxHostedPrivateVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter aws_dx_hosted_private_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterfaceAccepter } from '@cdktf/provider-aws'

new dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig">DxHostedPrivateVirtualInterfaceAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig">DxHostedPrivateVirtualInterfaceAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetDxGatewayId">resetDxGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetVpnGatewayId">resetVpnGatewayId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts"></a>

```typescript
public putTimeouts(value: DxHostedPrivateVirtualInterfaceAccepterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a>

---

##### `resetDxGatewayId` <a name="resetDxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetDxGatewayId"></a>

```typescript
public resetDxGatewayId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnGatewayId` <a name="resetVpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetVpnGatewayId"></a>

```typescript
public resetVpnGatewayId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct"></a>

```typescript
import { dxHostedPrivateVirtualInterfaceAccepter } from '@cdktf/provider-aws'

dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement"></a>

```typescript
import { dxHostedPrivateVirtualInterfaceAccepter } from '@cdktf/provider-aws'

dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource"></a>

```typescript
import { dxHostedPrivateVirtualInterfaceAccepter } from '@cdktf/provider-aws'

dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceIdInput">virtualInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayId">dxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeouts"></a>

```typescript
public readonly timeouts: DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayIdInput"></a>

```typescript
public readonly dxGatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DxHostedPrivateVirtualInterfaceAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a> | cdktf.IResolvable

---

##### `virtualInterfaceIdInput`<sup>Optional</sup> <a name="virtualInterfaceIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```typescript
public readonly virtualInterfaceIdInput: string;
```

- *Type:* string

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayIdInput"></a>

```typescript
public readonly vpnGatewayIdInput: string;
```

- *Type:* string

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayId"></a>

```typescript
public readonly dxGatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPrivateVirtualInterfaceAccepterConfig <a name="DxHostedPrivateVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterfaceAccepter } from '@cdktf/provider-aws'

const dxHostedPrivateVirtualInterfaceAccepterConfig: dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#id DxHostedPrivateVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags DxHostedPrivateVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `dxGatewayId`<sup>Optional</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dxGatewayId"></a>

```typescript
public readonly dxGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#id DxHostedPrivateVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags DxHostedPrivateVirtualInterfaceAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DxHostedPrivateVirtualInterfaceAccepterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#timeouts DxHostedPrivateVirtualInterfaceAccepter#timeouts}

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}.

---

### DxHostedPrivateVirtualInterfaceAccepterTimeouts <a name="DxHostedPrivateVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterfaceAccepter } from '@cdktf/provider-aws'

const dxHostedPrivateVirtualInterfaceAccepterTimeouts: dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#create DxHostedPrivateVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#delete DxHostedPrivateVirtualInterfaceAccepter#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#create DxHostedPrivateVirtualInterfaceAccepter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#delete DxHostedPrivateVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterfaceAccepter } from '@cdktf/provider-aws'

new dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DxHostedPrivateVirtualInterfaceAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a> | cdktf.IResolvable

---



