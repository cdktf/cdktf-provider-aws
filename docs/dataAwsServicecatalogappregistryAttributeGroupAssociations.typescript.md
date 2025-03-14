# `dataAwsServicecatalogappregistryAttributeGroupAssociations` Submodule <a name="`dataAwsServicecatalogappregistryAttributeGroupAssociations` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogappregistryAttributeGroupAssociations <a name="DataAwsServicecatalogappregistryAttributeGroupAssociations" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/servicecatalogappregistry_attribute_group_associations aws_servicecatalogappregistry_attribute_group_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.Initializer"></a>

```typescript
import { dataAwsServicecatalogappregistryAttributeGroupAssociations } from '@cdktf/provider-aws'

new dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations(scope: Construct, id: string, config?: DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig">DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig">DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicecatalogappregistryAttributeGroupAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isConstruct"></a>

```typescript
import { dataAwsServicecatalogappregistryAttributeGroupAssociations } from '@cdktf/provider-aws'

dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformElement"></a>

```typescript
import { dataAwsServicecatalogappregistryAttributeGroupAssociations } from '@cdktf/provider-aws'

dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformDataSource"></a>

```typescript
import { dataAwsServicecatalogappregistryAttributeGroupAssociations } from '@cdktf/provider-aws'

dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.generateConfigForImport"></a>

```typescript
import { dataAwsServicecatalogappregistryAttributeGroupAssociations } from '@cdktf/provider-aws'

dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsServicecatalogappregistryAttributeGroupAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServicecatalogappregistryAttributeGroupAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServicecatalogappregistryAttributeGroupAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/servicecatalogappregistry_attribute_group_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicecatalogappregistryAttributeGroupAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.attributeGroupIds">attributeGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributeGroupIds`<sup>Required</sup> <a name="attributeGroupIds" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.attributeGroupIds"></a>

```typescript
public readonly attributeGroupIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig <a name="DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.Initializer"></a>

```typescript
import { dataAwsServicecatalogappregistryAttributeGroupAssociations } from '@cdktf/provider-aws'

const dataAwsServicecatalogappregistryAttributeGroupAssociationsConfig: dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/servicecatalogappregistry_attribute_group_associations#id DataAwsServicecatalogappregistryAttributeGroupAssociations#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/servicecatalogappregistry_attribute_group_associations#name DataAwsServicecatalogappregistryAttributeGroupAssociations#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/servicecatalogappregistry_attribute_group_associations#id DataAwsServicecatalogappregistryAttributeGroupAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServicecatalogappregistryAttributeGroupAssociations.DataAwsServicecatalogappregistryAttributeGroupAssociationsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/servicecatalogappregistry_attribute_group_associations#name DataAwsServicecatalogappregistryAttributeGroupAssociations#name}.

---



