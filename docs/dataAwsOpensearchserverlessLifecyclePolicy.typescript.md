# `dataAwsOpensearchserverlessLifecyclePolicy` Submodule <a name="`dataAwsOpensearchserverlessLifecyclePolicy` Submodule" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessLifecyclePolicy <a name="DataAwsOpensearchserverlessLifecyclePolicy" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/opensearchserverless_lifecycle_policy aws_opensearchserverless_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessLifecyclePolicy } from '@cdktf/provider-aws'

new dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy(scope: Construct, id: string, config: DataAwsOpensearchserverlessLifecyclePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig">DataAwsOpensearchserverlessLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig">DataAwsOpensearchserverlessLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOpensearchserverlessLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isConstruct"></a>

```typescript
import { dataAwsOpensearchserverlessLifecyclePolicy } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformElement"></a>

```typescript
import { dataAwsOpensearchserverlessLifecyclePolicy } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsOpensearchserverlessLifecyclePolicy } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.generateConfigForImport"></a>

```typescript
import { dataAwsOpensearchserverlessLifecyclePolicy } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOpensearchserverlessLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOpensearchserverlessLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOpensearchserverlessLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/opensearchserverless_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.policyVersion">policyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `policyVersion`<sup>Required</sup> <a name="policyVersion" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.policyVersion"></a>

```typescript
public readonly policyVersion: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessLifecyclePolicyConfig <a name="DataAwsOpensearchserverlessLifecyclePolicyConfig" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessLifecyclePolicy } from '@cdktf/provider-aws'

const dataAwsOpensearchserverlessLifecyclePolicyConfig: dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/opensearchserverless_lifecycle_policy#name DataAwsOpensearchserverlessLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/opensearchserverless_lifecycle_policy#type DataAwsOpensearchserverlessLifecyclePolicy#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/opensearchserverless_lifecycle_policy#name DataAwsOpensearchserverlessLifecyclePolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsOpensearchserverlessLifecyclePolicy.DataAwsOpensearchserverlessLifecyclePolicyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/data-sources/opensearchserverless_lifecycle_policy#type DataAwsOpensearchserverlessLifecyclePolicy#type}.

---



