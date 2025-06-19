# `dataAwsBedrockInferenceProfiles` Submodule <a name="`dataAwsBedrockInferenceProfiles` Submodule" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockInferenceProfiles <a name="DataAwsBedrockInferenceProfiles" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/bedrock_inference_profiles aws_bedrock_inference_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

new dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles(scope: Construct, id: string, config?: DataAwsBedrockInferenceProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig">DataAwsBedrockInferenceProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig">DataAwsBedrockInferenceProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockInferenceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsBedrockInferenceProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockInferenceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockInferenceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/bedrock_inference_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockInferenceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.inferenceProfileSummaries">inferenceProfileSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `inferenceProfileSummaries`<sup>Required</sup> <a name="inferenceProfileSummaries" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.inferenceProfileSummaries"></a>

```typescript
public readonly inferenceProfileSummaries: DataAwsBedrockInferenceProfilesInferenceProfileSummariesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockInferenceProfilesConfig <a name="DataAwsBedrockInferenceProfilesConfig" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

const dataAwsBedrockInferenceProfilesConfig: dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/bedrock_inference_profiles#region DataAwsBedrockInferenceProfiles#region}

---

### DataAwsBedrockInferenceProfilesInferenceProfileSummaries <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummaries" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

const dataAwsBedrockInferenceProfilesInferenceProfileSummaries: dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries = { ... }
```


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

const dataAwsBedrockInferenceProfilesInferenceProfileSummariesModels: dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockInferenceProfilesInferenceProfileSummariesList <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesList" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

new dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get"></a>

```typescript
public get(index: number): DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

new dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get"></a>

```typescript
public get(index: number): DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

new dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels</a>

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockInferenceProfiles } from '@cdktf/provider-aws'

new dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileArn">inferenceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileId">inferenceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileName">inferenceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.models">models</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries">DataAwsBedrockInferenceProfilesInferenceProfileSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inferenceProfileArn`<sup>Required</sup> <a name="inferenceProfileArn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileArn"></a>

```typescript
public readonly inferenceProfileArn: string;
```

- *Type:* string

---

##### `inferenceProfileId`<sup>Required</sup> <a name="inferenceProfileId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileId"></a>

```typescript
public readonly inferenceProfileId: string;
```

- *Type:* string

---

##### `inferenceProfileName`<sup>Required</sup> <a name="inferenceProfileName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileName"></a>

```typescript
public readonly inferenceProfileName: string;
```

- *Type:* string

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.models"></a>

```typescript
public readonly models: DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockInferenceProfilesInferenceProfileSummaries;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries">DataAwsBedrockInferenceProfilesInferenceProfileSummaries</a>

---



