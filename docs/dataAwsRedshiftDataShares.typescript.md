# `dataAwsRedshiftDataShares` Submodule <a name="`dataAwsRedshiftDataShares` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftDataShares"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftDataShares <a name="DataAwsRedshiftDataShares" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_data_shares aws_redshift_data_shares}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.Initializer"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

new dataAwsRedshiftDataShares.DataAwsRedshiftDataShares(scope: Construct, id: string, config?: DataAwsRedshiftDataSharesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig">DataAwsRedshiftDataSharesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig">DataAwsRedshiftDataSharesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.putDataShares">putDataShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.resetDataShares">resetDataShares</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDataShares` <a name="putDataShares" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.putDataShares"></a>

```typescript
public putDataShares(value: IResolvable | DataAwsRedshiftDataSharesDataShares[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.putDataShares.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>[]

---

##### `resetDataShares` <a name="resetDataShares" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.resetDataShares"></a>

```typescript
public resetDataShares(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRedshiftDataShares resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isConstruct"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformElement"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformDataSource"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.generateConfigForImport"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsRedshiftDataShares resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRedshiftDataShares to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRedshiftDataShares that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_data_shares#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftDataShares to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.dataShares">dataShares</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList">DataAwsRedshiftDataSharesDataSharesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.dataSharesInput">dataSharesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataShares`<sup>Required</sup> <a name="dataShares" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.dataShares"></a>

```typescript
public readonly dataShares: DataAwsRedshiftDataSharesDataSharesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList">DataAwsRedshiftDataSharesDataSharesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `dataSharesInput`<sup>Optional</sup> <a name="dataSharesInput" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.dataSharesInput"></a>

```typescript
public readonly dataSharesInput: IResolvable | DataAwsRedshiftDataSharesDataShares[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataShares.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftDataSharesConfig <a name="DataAwsRedshiftDataSharesConfig" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.Initializer"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

const dataAwsRedshiftDataSharesConfig: dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.dataShares">dataShares</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>[]</code> | data_shares block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataShares`<sup>Optional</sup> <a name="dataShares" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesConfig.property.dataShares"></a>

```typescript
public readonly dataShares: IResolvable | DataAwsRedshiftDataSharesDataShares[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>[]

data_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_data_shares#data_shares DataAwsRedshiftDataShares#data_shares}

---

### DataAwsRedshiftDataSharesDataShares <a name="DataAwsRedshiftDataSharesDataShares" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares.Initializer"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

const dataAwsRedshiftDataSharesDataShares: dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftDataSharesDataSharesList <a name="DataAwsRedshiftDataSharesDataSharesList" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.Initializer"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

new dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.get"></a>

```typescript
public get(index: number): DataAwsRedshiftDataSharesDataSharesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRedshiftDataSharesDataShares[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>[]

---


### DataAwsRedshiftDataSharesDataSharesOutputReference <a name="DataAwsRedshiftDataSharesDataSharesOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer"></a>

```typescript
import { dataAwsRedshiftDataShares } from '@cdktf/provider-aws'

new dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.dataShareArn">dataShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.managedBy">managedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.producerArn">producerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.dataShareArn"></a>

```typescript
public readonly dataShareArn: string;
```

- *Type:* string

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.managedBy"></a>

```typescript
public readonly managedBy: string;
```

- *Type:* string

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.producerArn"></a>

```typescript
public readonly producerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataSharesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRedshiftDataSharesDataShares;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRedshiftDataShares.DataAwsRedshiftDataSharesDataShares">DataAwsRedshiftDataSharesDataShares</a>

---



