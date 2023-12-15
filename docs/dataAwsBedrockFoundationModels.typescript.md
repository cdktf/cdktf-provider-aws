# `dataAwsBedrockFoundationModels` Submodule <a name="`dataAwsBedrockFoundationModels` Submodule" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockFoundationModels <a name="DataAwsBedrockFoundationModels" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models aws_bedrock_foundation_models}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

new dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels(scope: Construct, id: string, config?: DataAwsBedrockFoundationModelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig">DataAwsBedrockFoundationModelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig">DataAwsBedrockFoundationModelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.putModelSummaries">putModelSummaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByCustomizationType">resetByCustomizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByInferenceType">resetByInferenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByOutputModality">resetByOutputModality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByProvider">resetByProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetModelSummaries">resetModelSummaries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putModelSummaries` <a name="putModelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.putModelSummaries"></a>

```typescript
public putModelSummaries(value: IResolvable | DataAwsBedrockFoundationModelsModelSummaries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.putModelSummaries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>[]

---

##### `resetByCustomizationType` <a name="resetByCustomizationType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByCustomizationType"></a>

```typescript
public resetByCustomizationType(): void
```

##### `resetByInferenceType` <a name="resetByInferenceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByInferenceType"></a>

```typescript
public resetByInferenceType(): void
```

##### `resetByOutputModality` <a name="resetByOutputModality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByOutputModality"></a>

```typescript
public resetByOutputModality(): void
```

##### `resetByProvider` <a name="resetByProvider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByProvider"></a>

```typescript
public resetByProvider(): void
```

##### `resetModelSummaries` <a name="resetModelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetModelSummaries"></a>

```typescript
public resetModelSummaries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockFoundationModels resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsBedrockFoundationModels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockFoundationModels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockFoundationModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockFoundationModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummaries">modelSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList">DataAwsBedrockFoundationModelsModelSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationTypeInput">byCustomizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceTypeInput">byInferenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModalityInput">byOutputModalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProviderInput">byProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummariesInput">modelSummariesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationType">byCustomizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceType">byInferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModality">byOutputModality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProvider">byProvider</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelSummaries`<sup>Required</sup> <a name="modelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummaries"></a>

```typescript
public readonly modelSummaries: DataAwsBedrockFoundationModelsModelSummariesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList">DataAwsBedrockFoundationModelsModelSummariesList</a>

---

##### `byCustomizationTypeInput`<sup>Optional</sup> <a name="byCustomizationTypeInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationTypeInput"></a>

```typescript
public readonly byCustomizationTypeInput: string;
```

- *Type:* string

---

##### `byInferenceTypeInput`<sup>Optional</sup> <a name="byInferenceTypeInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceTypeInput"></a>

```typescript
public readonly byInferenceTypeInput: string;
```

- *Type:* string

---

##### `byOutputModalityInput`<sup>Optional</sup> <a name="byOutputModalityInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModalityInput"></a>

```typescript
public readonly byOutputModalityInput: string;
```

- *Type:* string

---

##### `byProviderInput`<sup>Optional</sup> <a name="byProviderInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProviderInput"></a>

```typescript
public readonly byProviderInput: string;
```

- *Type:* string

---

##### `modelSummariesInput`<sup>Optional</sup> <a name="modelSummariesInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummariesInput"></a>

```typescript
public readonly modelSummariesInput: IResolvable | DataAwsBedrockFoundationModelsModelSummaries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>[]

---

##### `byCustomizationType`<sup>Required</sup> <a name="byCustomizationType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationType"></a>

```typescript
public readonly byCustomizationType: string;
```

- *Type:* string

---

##### `byInferenceType`<sup>Required</sup> <a name="byInferenceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceType"></a>

```typescript
public readonly byInferenceType: string;
```

- *Type:* string

---

##### `byOutputModality`<sup>Required</sup> <a name="byOutputModality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModality"></a>

```typescript
public readonly byOutputModality: string;
```

- *Type:* string

---

##### `byProvider`<sup>Required</sup> <a name="byProvider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProvider"></a>

```typescript
public readonly byProvider: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockFoundationModelsConfig <a name="DataAwsBedrockFoundationModelsConfig" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

const dataAwsBedrockFoundationModelsConfig: dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byCustomizationType">byCustomizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byInferenceType">byInferenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byOutputModality">byOutputModality</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byProvider">byProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.modelSummaries">modelSummaries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>[]</code> | model_summaries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `byCustomizationType`<sup>Optional</sup> <a name="byCustomizationType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byCustomizationType"></a>

```typescript
public readonly byCustomizationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}.

---

##### `byInferenceType`<sup>Optional</sup> <a name="byInferenceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byInferenceType"></a>

```typescript
public readonly byInferenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}.

---

##### `byOutputModality`<sup>Optional</sup> <a name="byOutputModality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byOutputModality"></a>

```typescript
public readonly byOutputModality: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}.

---

##### `byProvider`<sup>Optional</sup> <a name="byProvider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byProvider"></a>

```typescript
public readonly byProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}.

---

##### `modelSummaries`<sup>Optional</sup> <a name="modelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.modelSummaries"></a>

```typescript
public readonly modelSummaries: IResolvable | DataAwsBedrockFoundationModelsModelSummaries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>[]

model_summaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/bedrock_foundation_models#model_summaries DataAwsBedrockFoundationModels#model_summaries}

---

### DataAwsBedrockFoundationModelsModelSummaries <a name="DataAwsBedrockFoundationModelsModelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

const dataAwsBedrockFoundationModelsModelSummaries: dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockFoundationModelsModelSummariesList <a name="DataAwsBedrockFoundationModelsModelSummariesList" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

new dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelsModelSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsBedrockFoundationModelsModelSummaries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>[]

---


### DataAwsBedrockFoundationModelsModelSummariesOutputReference <a name="DataAwsBedrockFoundationModelsModelSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModels } from '@cdktf/provider-aws'

new dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.customizationsSupported">customizationsSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inferenceTypesSupported">inferenceTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inputModalities">inputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.outputModalities">outputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.responseStreamingSupported">responseStreamingSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizationsSupported`<sup>Required</sup> <a name="customizationsSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.customizationsSupported"></a>

```typescript
public readonly customizationsSupported: string[];
```

- *Type:* string[]

---

##### `inferenceTypesSupported`<sup>Required</sup> <a name="inferenceTypesSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inferenceTypesSupported"></a>

```typescript
public readonly inferenceTypesSupported: string[];
```

- *Type:* string[]

---

##### `inputModalities`<sup>Required</sup> <a name="inputModalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inputModalities"></a>

```typescript
public readonly inputModalities: string[];
```

- *Type:* string[]

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `outputModalities`<sup>Required</sup> <a name="outputModalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.outputModalities"></a>

```typescript
public readonly outputModalities: string[];
```

- *Type:* string[]

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `responseStreamingSupported`<sup>Required</sup> <a name="responseStreamingSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.responseStreamingSupported"></a>

```typescript
public readonly responseStreamingSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsBedrockFoundationModelsModelSummaries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>

---



