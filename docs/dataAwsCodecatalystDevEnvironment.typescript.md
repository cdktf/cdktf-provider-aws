# `dataAwsCodecatalystDevEnvironment` Submodule <a name="`dataAwsCodecatalystDevEnvironment` Submodule" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodecatalystDevEnvironment <a name="DataAwsCodecatalystDevEnvironment" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

new dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment(scope: Construct, id: string, config: DataAwsCodecatalystDevEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig">DataAwsCodecatalystDevEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig">DataAwsCodecatalystDevEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories">putRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId">resetCreatorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRepositories` <a name="putRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories"></a>

```typescript
public putRepositories(value: IResolvable | DataAwsCodecatalystDevEnvironmentRepositories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>[]

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCreatorId` <a name="resetCreatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId"></a>

```typescript
public resetCreatorId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRepositories` <a name="resetRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories"></a>

```typescript
public resetRepositories(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCodecatalystDevEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCodecatalystDevEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCodecatalystDevEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides">ides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes">inactivityTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage">persistentStorage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories">repositories</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput">creatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput">repositoriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput">spaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId">creatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName">spaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ides`<sup>Required</sup> <a name="ides" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides"></a>

```typescript
public readonly ides: DataAwsCodecatalystDevEnvironmentIdesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a>

---

##### `inactivityTimeoutMinutes`<sup>Required</sup> <a name="inactivityTimeoutMinutes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes"></a>

```typescript
public readonly inactivityTimeoutMinutes: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `persistentStorage`<sup>Required</sup> <a name="persistentStorage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage"></a>

```typescript
public readonly persistentStorage: DataAwsCodecatalystDevEnvironmentPersistentStorageList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a>

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories"></a>

```typescript
public readonly repositories: DataAwsCodecatalystDevEnvironmentRepositoriesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `creatorIdInput`<sup>Optional</sup> <a name="creatorIdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput"></a>

```typescript
public readonly creatorIdInput: string;
```

- *Type:* string

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput"></a>

```typescript
public readonly repositoriesInput: IResolvable | DataAwsCodecatalystDevEnvironmentRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>[]

---

##### `spaceNameInput`<sup>Optional</sup> <a name="spaceNameInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput"></a>

```typescript
public readonly spaceNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId"></a>

```typescript
public readonly creatorId: string;
```

- *Type:* string

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName"></a>

```typescript
public readonly spaceName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodecatalystDevEnvironmentConfig <a name="DataAwsCodecatalystDevEnvironmentConfig" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

const dataAwsCodecatalystDevEnvironmentConfig: dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId">envId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName">projectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName">spaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId">creatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories">repositories</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>[]</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}.

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName"></a>

```typescript
public readonly spaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}.

---

##### `creatorId`<sup>Optional</sup> <a name="creatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId"></a>

```typescript
public readonly creatorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#region DataAwsCodecatalystDevEnvironment#region}

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories"></a>

```typescript
public readonly repositories: IResolvable | DataAwsCodecatalystDevEnvironmentRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>[]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#repositories DataAwsCodecatalystDevEnvironment#repositories}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}.

---

### DataAwsCodecatalystDevEnvironmentIdes <a name="DataAwsCodecatalystDevEnvironmentIdes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

const dataAwsCodecatalystDevEnvironmentIdes: dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes = { ... }
```


### DataAwsCodecatalystDevEnvironmentPersistentStorage <a name="DataAwsCodecatalystDevEnvironmentPersistentStorage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

const dataAwsCodecatalystDevEnvironmentPersistentStorage: dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage = { ... }
```


### DataAwsCodecatalystDevEnvironmentRepositories <a name="DataAwsCodecatalystDevEnvironmentRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

const dataAwsCodecatalystDevEnvironmentRepositories: dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCodecatalystDevEnvironmentIdesList <a name="DataAwsCodecatalystDevEnvironmentIdesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

new dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get"></a>

```typescript
public get(index: number): DataAwsCodecatalystDevEnvironmentIdesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCodecatalystDevEnvironmentIdesOutputReference <a name="DataAwsCodecatalystDevEnvironmentIdesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

new dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCodecatalystDevEnvironmentIdes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a>

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageList <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

new dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get"></a>

```typescript
public get(index: number): DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

new dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCodecatalystDevEnvironmentPersistentStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a>

---


### DataAwsCodecatalystDevEnvironmentRepositoriesList <a name="DataAwsCodecatalystDevEnvironmentRepositoriesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

new dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get"></a>

```typescript
public get(index: number): DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsCodecatalystDevEnvironmentRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>[]

---


### DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference <a name="DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer"></a>

```typescript
import { dataAwsCodecatalystDevEnvironment } from '@cdktf/provider-aws'

new dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsCodecatalystDevEnvironmentRepositories;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>

---



