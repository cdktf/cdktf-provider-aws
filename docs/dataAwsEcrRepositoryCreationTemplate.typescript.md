# `dataAwsEcrRepositoryCreationTemplate` Submodule <a name="`dataAwsEcrRepositoryCreationTemplate` Submodule" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrRepositoryCreationTemplate <a name="DataAwsEcrRepositoryCreationTemplate" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template aws_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

new dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate(scope: Construct, id: string, config: DataAwsEcrRepositoryCreationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig">DataAwsEcrRepositoryCreationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig">DataAwsEcrRepositoryCreationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetResourceTags">resetResourceTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcrRepositoryCreationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.appliedFor">appliedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.customRoleArn">customRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList">DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutability">imageTagMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.repositoryPolicy">repositoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTagsInput">resourceTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appliedFor`<sup>Required</sup> <a name="appliedFor" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.appliedFor"></a>

```typescript
public readonly appliedFor: string[];
```

- *Type:* string[]

---

##### `customRoleArn`<sup>Required</sup> <a name="customRoleArn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.customRoleArn"></a>

```typescript
public readonly customRoleArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList">DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList</a>

---

##### `imageTagMutability`<sup>Required</sup> <a name="imageTagMutability" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```typescript
public readonly imageTagMutability: string;
```

- *Type:* string

---

##### `lifecyclePolicy`<sup>Required</sup> <a name="lifecyclePolicy" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```typescript
public readonly lifecyclePolicy: string;
```

- *Type:* string

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `repositoryPolicy`<sup>Required</sup> <a name="repositoryPolicy" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```typescript
public readonly repositoryPolicy: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrRepositoryCreationTemplateConfig <a name="DataAwsEcrRepositoryCreationTemplateConfig" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.Initializer"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

const dataAwsEcrRepositoryCreationTemplateConfig: dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}.

---

### DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

const dataAwsEcrRepositoryCreationTemplateEncryptionConfiguration: dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

new dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsEcrRepositoryCreationTemplate } from '@cdktf/provider-aws'

new dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration</a>

---



