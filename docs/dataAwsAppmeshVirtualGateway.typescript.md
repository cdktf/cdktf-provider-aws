# `dataAwsAppmeshVirtualGateway` Submodule <a name="`dataAwsAppmeshVirtualGateway` Submodule" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppmeshVirtualGateway <a name="DataAwsAppmeshVirtualGateway" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway aws_appmesh_virtual_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway(scope: Construct, id: string, config: DataAwsAppmeshVirtualGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig">DataAwsAppmeshVirtualGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig">DataAwsAppmeshVirtualGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAppmeshVirtualGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isConstruct"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformElement"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformDataSource"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsAppmeshVirtualGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAppmeshVirtualGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAppmeshVirtualGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppmeshVirtualGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshOwner">meshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList">DataAwsAppmeshVirtualGatewaySpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshNameInput">meshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshName">meshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.spec"></a>

```typescript
public readonly spec: DataAwsAppmeshVirtualGatewaySpecList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList">DataAwsAppmeshVirtualGatewaySpecList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshNameInput"></a>

```typescript
public readonly meshNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppmeshVirtualGatewayConfig <a name="DataAwsAppmeshVirtualGatewayConfig" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewayConfig: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.meshName">meshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#mesh_name DataAwsAppmeshVirtualGateway#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#name DataAwsAppmeshVirtualGateway#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#id DataAwsAppmeshVirtualGateway#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#tags DataAwsAppmeshVirtualGateway#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#mesh_name DataAwsAppmeshVirtualGateway#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#name DataAwsAppmeshVirtualGateway#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#id DataAwsAppmeshVirtualGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/appmesh_virtual_gateway#tags DataAwsAppmeshVirtualGateway#tags}.

---

### DataAwsAppmeshVirtualGatewaySpec <a name="DataAwsAppmeshVirtualGatewaySpec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpec: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaults <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaults" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaults: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListener <a name="DataAwsAppmeshVirtualGatewaySpecListener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListener: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerConnectionPool: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck <a name="DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerHealthCheck: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerPortMapping <a name="DataAwsAppmeshVirtualGatewaySpecListenerPortMapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerPortMapping: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTls <a name="DataAwsAppmeshVirtualGatewaySpecListenerTls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTls: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsValidation: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecLogging <a name="DataAwsAppmeshVirtualGatewaySpecLogging" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecLogging: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecLoggingAccessLog: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat = { ... }
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson: dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls"></a>

```typescript
public readonly tls: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file"></a>

```typescript
public readonly file: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds"></a>

```typescript
public readonly sds: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce">enforce</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList</a>

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce"></a>

```typescript
public readonly enforce: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation"></a>

```typescript
public readonly validation: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList</a>

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust"></a>

```typescript
public readonly trust: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">exact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```typescript
public readonly match: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns">certificateAuthorityArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityArns`<sup>Required</sup> <a name="certificateAuthorityArns" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns"></a>

```typescript
public readonly certificateAuthorityArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acm`<sup>Required</sup> <a name="acm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm"></a>

```typescript
public readonly acm: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file"></a>

```typescript
public readonly file: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds"></a>

```typescript
public readonly sds: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy">clientPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults">DataAwsAppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientPolicy`<sup>Required</sup> <a name="clientPolicy" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy"></a>

```typescript
public readonly clientPolicy: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecBackendDefaults;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults">DataAwsAppmeshVirtualGatewaySpecBackendDefaults</a>

---


### DataAwsAppmeshVirtualGatewaySpecList <a name="DataAwsAppmeshVirtualGatewaySpecList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests">maxRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests"></a>

```typescript
public readonly maxRequests: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests">maxRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests"></a>

```typescript
public readonly maxRequests: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2">http2</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc"></a>

```typescript
public readonly grpc: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http"></a>

```typescript
public readonly http: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList</a>

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2"></a>

```typescript
public readonly http2: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList <a name="DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis">intervalMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis">timeoutMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `intervalMillis`<sup>Required</sup> <a name="intervalMillis" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis"></a>

```typescript
public readonly intervalMillis: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `timeoutMillis`<sup>Required</sup> <a name="timeoutMillis" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis"></a>

```typescript
public readonly timeoutMillis: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerList <a name="DataAwsAppmeshVirtualGatewaySpecListenerList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool">connectionPool</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList">DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener">DataAwsAppmeshVirtualGatewaySpecListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionPool`<sup>Required</sup> <a name="connectionPool" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool"></a>

```typescript
public readonly connectionPool: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList</a>

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping"></a>

```typescript
public readonly portMapping: DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList">DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.tls"></a>

```typescript
public readonly tls: DataAwsAppmeshVirtualGatewaySpecListenerTlsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListener;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener">DataAwsAppmeshVirtualGatewaySpecListener</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList <a name="DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping">DataAwsAppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerPortMapping;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping">DataAwsAppmeshVirtualGatewaySpecListenerPortMapping</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acm`<sup>Required</sup> <a name="acm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm"></a>

```typescript
public readonly acm: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file"></a>

```typescript
public readonly file: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds"></a>

```typescript
public readonly sds: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls">DataAwsAppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation"></a>

```typescript
public readonly validation: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTls;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls">DataAwsAppmeshVirtualGatewaySpecListenerTls</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList</a>

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust"></a>

```typescript
public readonly trust: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">exact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```typescript
public readonly match: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file"></a>

```typescript
public readonly file: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds"></a>

```typescript
public readonly sds: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.json"></a>

```typescript
public readonly json: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.format">format</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.format"></a>

```typescript
public readonly format: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file"></a>

```typescript
public readonly file: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog">accessLog</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging">DataAwsAppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLog`<sup>Required</sup> <a name="accessLog" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog"></a>

```typescript
public readonly accessLog: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpecLogging;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging">DataAwsAppmeshVirtualGatewaySpecLogging</a>

---


### DataAwsAppmeshVirtualGatewaySpecOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualGateway } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.backendDefaults">backendDefaults</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList">DataAwsAppmeshVirtualGatewaySpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList">DataAwsAppmeshVirtualGatewaySpecLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec">DataAwsAppmeshVirtualGatewaySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendDefaults`<sup>Required</sup> <a name="backendDefaults" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.backendDefaults"></a>

```typescript
public readonly backendDefaults: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList</a>

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.listener"></a>

```typescript
public readonly listener: DataAwsAppmeshVirtualGatewaySpecListenerList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList">DataAwsAppmeshVirtualGatewaySpecListenerList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.logging"></a>

```typescript
public readonly logging: DataAwsAppmeshVirtualGatewaySpecLoggingList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList">DataAwsAppmeshVirtualGatewaySpecLoggingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualGatewaySpec;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec">DataAwsAppmeshVirtualGatewaySpec</a>

---



