# `dataAwsAppmeshVirtualRouter` Submodule <a name="`dataAwsAppmeshVirtualRouter` Submodule" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppmeshVirtualRouter <a name="DataAwsAppmeshVirtualRouter" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router aws_appmesh_virtual_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter(scope: Construct, id: string, config: DataAwsAppmeshVirtualRouterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig">DataAwsAppmeshVirtualRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig">DataAwsAppmeshVirtualRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetMeshOwner"></a>

```typescript
public resetMeshOwner(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAppmeshVirtualRouter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isConstruct"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformElement"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformDataSource"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsAppmeshVirtualRouter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAppmeshVirtualRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAppmeshVirtualRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppmeshVirtualRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList">DataAwsAppmeshVirtualRouterSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshNameInput">meshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwnerInput">meshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshName">meshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwner">meshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.spec"></a>

```typescript
public readonly spec: DataAwsAppmeshVirtualRouterSpecList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList">DataAwsAppmeshVirtualRouterSpecList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshNameInput"></a>

```typescript
public readonly meshNameInput: string;
```

- *Type:* string

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwnerInput"></a>

```typescript
public readonly meshOwnerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppmeshVirtualRouterConfig <a name="DataAwsAppmeshVirtualRouterConfig" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualRouterConfig: dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshName">meshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#mesh_name DataAwsAppmeshVirtualRouter#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#name DataAwsAppmeshVirtualRouter#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#id DataAwsAppmeshVirtualRouter#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshOwner">meshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#mesh_owner DataAwsAppmeshVirtualRouter#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#tags DataAwsAppmeshVirtualRouter#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#mesh_name DataAwsAppmeshVirtualRouter#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#name DataAwsAppmeshVirtualRouter#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#id DataAwsAppmeshVirtualRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#mesh_owner DataAwsAppmeshVirtualRouter#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/appmesh_virtual_router#tags DataAwsAppmeshVirtualRouter#tags}.

---

### DataAwsAppmeshVirtualRouterSpec <a name="DataAwsAppmeshVirtualRouterSpec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualRouterSpec: dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec = { ... }
```


### DataAwsAppmeshVirtualRouterSpecListener <a name="DataAwsAppmeshVirtualRouterSpecListener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualRouterSpecListener: dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener = { ... }
```


### DataAwsAppmeshVirtualRouterSpecListenerPortMapping <a name="DataAwsAppmeshVirtualRouterSpecListenerPortMapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

const dataAwsAppmeshVirtualRouterSpecListenerPortMapping: dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppmeshVirtualRouterSpecList <a name="DataAwsAppmeshVirtualRouterSpecList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualRouterSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualRouterSpecListenerList <a name="DataAwsAppmeshVirtualRouterSpecListenerList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualRouterSpecListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualRouterSpecListenerOutputReference <a name="DataAwsAppmeshVirtualRouterSpecListenerOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.portMapping">portMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList">DataAwsAppmeshVirtualRouterSpecListenerPortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener">DataAwsAppmeshVirtualRouterSpecListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portMapping`<sup>Required</sup> <a name="portMapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.portMapping"></a>

```typescript
public readonly portMapping: DataAwsAppmeshVirtualRouterSpecListenerPortMappingList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList">DataAwsAppmeshVirtualRouterSpecListenerPortMappingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualRouterSpecListener;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener">DataAwsAppmeshVirtualRouterSpecListener</a>

---


### DataAwsAppmeshVirtualRouterSpecListenerPortMappingList <a name="DataAwsAppmeshVirtualRouterSpecListenerPortMappingList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.get"></a>

```typescript
public get(index: number): DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference <a name="DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping">DataAwsAppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualRouterSpecListenerPortMapping;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping">DataAwsAppmeshVirtualRouterSpecListenerPortMapping</a>

---


### DataAwsAppmeshVirtualRouterSpecOutputReference <a name="DataAwsAppmeshVirtualRouterSpecOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsAppmeshVirtualRouter } from '@cdktf/provider-aws'

new dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList">DataAwsAppmeshVirtualRouterSpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec">DataAwsAppmeshVirtualRouterSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.listener"></a>

```typescript
public readonly listener: DataAwsAppmeshVirtualRouterSpecListenerList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList">DataAwsAppmeshVirtualRouterSpecListenerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppmeshVirtualRouterSpec;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec">DataAwsAppmeshVirtualRouterSpec</a>

---



