# `dxMacsecKeyAssociation` Submodule <a name="`dxMacsecKeyAssociation` Submodule" id="@cdktf/provider-aws.dxMacsecKeyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxMacsecKeyAssociation <a name="DxMacsecKeyAssociation" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association aws_dx_macsec_key_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer"></a>

```typescript
import { dxMacsecKeyAssociation } from '@cdktf/provider-aws'

new dxMacsecKeyAssociation.DxMacsecKeyAssociation(scope: Construct, id: string, config: DxMacsecKeyAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig">DxMacsecKeyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig">DxMacsecKeyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCak">resetCak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCkn">resetCkn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCak` <a name="resetCak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCak"></a>

```typescript
public resetCak(): void
```

##### `resetCkn` <a name="resetCkn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCkn"></a>

```typescript
public resetCkn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct"></a>

```typescript
import { dxMacsecKeyAssociation } from '@cdktf/provider-aws'

dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement"></a>

```typescript
import { dxMacsecKeyAssociation } from '@cdktf/provider-aws'

dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource"></a>

```typescript
import { dxMacsecKeyAssociation } from '@cdktf/provider-aws'

dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.startOn">startOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cakInput">cakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cknInput">cknInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cak">cak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.ckn">ckn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `startOn`<sup>Required</sup> <a name="startOn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.startOn"></a>

```typescript
public readonly startOn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `cakInput`<sup>Optional</sup> <a name="cakInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cakInput"></a>

```typescript
public readonly cakInput: string;
```

- *Type:* string

---

##### `cknInput`<sup>Optional</sup> <a name="cknInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cknInput"></a>

```typescript
public readonly cknInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `cak`<sup>Required</sup> <a name="cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cak"></a>

```typescript
public readonly cak: string;
```

- *Type:* string

---

##### `ckn`<sup>Required</sup> <a name="ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.ckn"></a>

```typescript
public readonly ckn: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxMacsecKeyAssociationConfig <a name="DxMacsecKeyAssociationConfig" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.Initializer"></a>

```typescript
import { dxMacsecKeyAssociation } from '@cdktf/provider-aws'

const dxMacsecKeyAssociationConfig: dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.cak">cak</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.ckn">ckn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}.

---

##### `cak`<sup>Optional</sup> <a name="cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.cak"></a>

```typescript
public readonly cak: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}.

---

##### `ckn`<sup>Optional</sup> <a name="ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.ckn"></a>

```typescript
public readonly ckn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}.

---



