# `dataAwsEksClusterVersions` Submodule <a name="`dataAwsEksClusterVersions` Submodule" id="@cdktf/provider-aws.dataAwsEksClusterVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEksClusterVersions <a name="DataAwsEksClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

new dataAwsEksClusterVersions.DataAwsEksClusterVersions(scope: Construct, id: string, config?: DataAwsEksClusterVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig">DataAwsEksClusterVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig">DataAwsEksClusterVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly">resetClusterVersionsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly">resetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus">resetVersionStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetClusterVersionsOnly` <a name="resetClusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly"></a>

```typescript
public resetClusterVersionsOnly(): void
```

##### `resetDefaultOnly` <a name="resetDefaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly"></a>

```typescript
public resetDefaultOnly(): void
```

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll"></a>

```typescript
public resetIncludeAll(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetVersionStatus` <a name="resetVersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus"></a>

```typescript
public resetVersionStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEksClusterVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEksClusterVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEksClusterVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions">clusterVersions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput">clusterVersionsOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput">defaultOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput">includeAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput">versionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly">clusterVersionsOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly">defaultOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll">includeAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus">versionStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clusterVersions`<sup>Required</sup> <a name="clusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions"></a>

```typescript
public readonly clusterVersions: DataAwsEksClusterVersionsClusterVersionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a>

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `clusterVersionsOnlyInput`<sup>Optional</sup> <a name="clusterVersionsOnlyInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput"></a>

```typescript
public readonly clusterVersionsOnlyInput: string[];
```

- *Type:* string[]

---

##### `defaultOnlyInput`<sup>Optional</sup> <a name="defaultOnlyInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput"></a>

```typescript
public readonly defaultOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput"></a>

```typescript
public readonly includeAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `versionStatusInput`<sup>Optional</sup> <a name="versionStatusInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput"></a>

```typescript
public readonly versionStatusInput: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `clusterVersionsOnly`<sup>Required</sup> <a name="clusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly"></a>

```typescript
public readonly clusterVersionsOnly: string[];
```

- *Type:* string[]

---

##### `defaultOnly`<sup>Required</sup> <a name="defaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly"></a>

```typescript
public readonly defaultOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `versionStatus`<sup>Required</sup> <a name="versionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus"></a>

```typescript
public readonly versionStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEksClusterVersionsClusterVersions <a name="DataAwsEksClusterVersionsClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions.Initializer"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

const dataAwsEksClusterVersionsClusterVersions: dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions = { ... }
```


### DataAwsEksClusterVersionsConfig <a name="DataAwsEksClusterVersionsConfig" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.Initializer"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

const dataAwsEksClusterVersionsConfig: dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType">clusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly">clusterVersionsOnly</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly">defaultOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll">includeAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus">versionStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}.

---

##### `clusterVersionsOnly`<sup>Optional</sup> <a name="clusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly"></a>

```typescript
public readonly clusterVersionsOnly: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}.

---

##### `defaultOnly`<sup>Optional</sup> <a name="defaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly"></a>

```typescript
public readonly defaultOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}.

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#region DataAwsEksClusterVersions#region}

---

##### `versionStatus`<sup>Optional</sup> <a name="versionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus"></a>

```typescript
public readonly versionStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEksClusterVersionsClusterVersionsList <a name="DataAwsEksClusterVersionsClusterVersionsList" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

new dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get"></a>

```typescript
public get(index: number): DataAwsEksClusterVersionsClusterVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEksClusterVersionsClusterVersionsOutputReference <a name="DataAwsEksClusterVersionsClusterVersionsOutputReference" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer"></a>

```typescript
import { dataAwsEksClusterVersions } from '@cdktf/provider-aws'

new dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion">defaultPlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate">endOfExtendedSupportDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate">endOfStandardSupportDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion">kubernetesPatchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus">versionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `defaultPlatformVersion`<sup>Required</sup> <a name="defaultPlatformVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion"></a>

```typescript
public readonly defaultPlatformVersion: string;
```

- *Type:* string

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endOfExtendedSupportDate`<sup>Required</sup> <a name="endOfExtendedSupportDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate"></a>

```typescript
public readonly endOfExtendedSupportDate: string;
```

- *Type:* string

---

##### `endOfStandardSupportDate`<sup>Required</sup> <a name="endOfStandardSupportDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate"></a>

```typescript
public readonly endOfStandardSupportDate: string;
```

- *Type:* string

---

##### `kubernetesPatchVersion`<sup>Required</sup> <a name="kubernetesPatchVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion"></a>

```typescript
public readonly kubernetesPatchVersion: string;
```

- *Type:* string

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `versionStatus`<sup>Required</sup> <a name="versionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus"></a>

```typescript
public readonly versionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEksClusterVersionsClusterVersions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a>

---



