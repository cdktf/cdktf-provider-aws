# `data_aws_ecr_pull_through_cache_rule`

Refer to the Terraform Registory for docs: [`data_aws_ecr_pull_through_cache_rule`](https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/ecr_pull_through_cache_rule).

# `dataAwsEcrPullThroughCacheRule` Submodule <a name="`dataAwsEcrPullThroughCacheRule` Submodule" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrPullThroughCacheRule <a name="DataAwsEcrPullThroughCacheRule" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.Initializer"></a>

```typescript
import { dataAwsEcrPullThroughCacheRule } from '@cdktf/provider-aws'

new dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule(scope: Construct, id: string, config: DataAwsEcrPullThroughCacheRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig">DataAwsEcrPullThroughCacheRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig">DataAwsEcrPullThroughCacheRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isConstruct"></a>

```typescript
import { dataAwsEcrPullThroughCacheRule } from '@cdktf/provider-aws'

dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformElement"></a>

```typescript
import { dataAwsEcrPullThroughCacheRule } from '@cdktf/provider-aws'

dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformDataSource"></a>

```typescript
import { dataAwsEcrPullThroughCacheRule } from '@cdktf/provider-aws'

dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.generateConfigForImport"></a>

```typescript
import { dataAwsEcrPullThroughCacheRule } from '@cdktf/provider-aws'

dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcrPullThroughCacheRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcrPullThroughCacheRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrPullThroughCacheRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.upstreamRegistryUrl">upstreamRegistryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.ecrRepositoryPrefixInput">ecrRepositoryPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `upstreamRegistryUrl`<sup>Required</sup> <a name="upstreamRegistryUrl" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.upstreamRegistryUrl"></a>

```typescript
public readonly upstreamRegistryUrl: string;
```

- *Type:* string

---

##### `ecrRepositoryPrefixInput`<sup>Optional</sup> <a name="ecrRepositoryPrefixInput" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.ecrRepositoryPrefixInput"></a>

```typescript
public readonly ecrRepositoryPrefixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ecrRepositoryPrefix`<sup>Required</sup> <a name="ecrRepositoryPrefix" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.ecrRepositoryPrefix"></a>

```typescript
public readonly ecrRepositoryPrefix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrPullThroughCacheRuleConfig <a name="DataAwsEcrPullThroughCacheRuleConfig" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.Initializer"></a>

```typescript
import { dataAwsEcrPullThroughCacheRule } from '@cdktf/provider-aws'

const dataAwsEcrPullThroughCacheRuleConfig: dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/ecr_pull_through_cache_rule#ecr_repository_prefix DataAwsEcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/ecr_pull_through_cache_rule#id DataAwsEcrPullThroughCacheRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ecrRepositoryPrefix`<sup>Required</sup> <a name="ecrRepositoryPrefix" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix"></a>

```typescript
public readonly ecrRepositoryPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/ecr_pull_through_cache_rule#ecr_repository_prefix DataAwsEcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrPullThroughCacheRule.DataAwsEcrPullThroughCacheRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/ecr_pull_through_cache_rule#id DataAwsEcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



