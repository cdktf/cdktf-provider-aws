# `dataAwsSecurityhubStandardsControlAssociations` Submodule <a name="`dataAwsSecurityhubStandardsControlAssociations` Submodule" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

new dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations(scope: Construct, id: string, config: DataAwsSecurityhubStandardsControlAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig">DataAwsSecurityhubStandardsControlAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig">DataAwsSecurityhubStandardsControlAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSecurityhubStandardsControlAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSecurityhubStandardsControlAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/securityhub_standards_control_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubStandardsControlAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations">standardsControlAssociations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput">securityControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId">securityControlId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `standardsControlAssociations`<sup>Required</sup> <a name="standardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations"></a>

```typescript
public readonly standardsControlAssociations: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityControlIdInput`<sup>Optional</sup> <a name="securityControlIdInput" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput"></a>

```typescript
public readonly securityControlIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubStandardsControlAssociationsConfig <a name="DataAwsSecurityhubStandardsControlAssociationsConfig" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.Initializer"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

const dataAwsSecurityhubStandardsControlAssociationsConfig: dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId">securityControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/securityhub_standards_control_associations#region DataAwsSecurityhubStandardsControlAssociations#region}

---

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations.Initializer"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

const dataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations: dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

new dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get"></a>

```typescript
public get(index: number): DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer"></a>

```typescript
import { dataAwsSecurityhubStandardsControlAssociations } from '@cdktf/provider-aws'

new dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus">associationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements">relatedRequirements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn">securityControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId">securityControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn">standardsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription">standardsControlDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle">standardsControlTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason">updatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associationStatus`<sup>Required</sup> <a name="associationStatus" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus"></a>

```typescript
public readonly associationStatus: string;
```

- *Type:* string

---

##### `relatedRequirements`<sup>Required</sup> <a name="relatedRequirements" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements"></a>

```typescript
public readonly relatedRequirements: string[];
```

- *Type:* string[]

---

##### `securityControlArn`<sup>Required</sup> <a name="securityControlArn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn"></a>

```typescript
public readonly securityControlArn: string;
```

- *Type:* string

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn"></a>

```typescript
public readonly standardsArn: string;
```

- *Type:* string

---

##### `standardsControlDescription`<sup>Required</sup> <a name="standardsControlDescription" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription"></a>

```typescript
public readonly standardsControlDescription: string;
```

- *Type:* string

---

##### `standardsControlTitle`<sup>Required</sup> <a name="standardsControlTitle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle"></a>

```typescript
public readonly standardsControlTitle: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedReason`<sup>Required</sup> <a name="updatedReason" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason"></a>

```typescript
public readonly updatedReason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a>

---



