# `dataAwsCloudwatchContributorManagedInsightRules` Submodule <a name="`dataAwsCloudwatchContributorManagedInsightRules` Submodule" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudwatchContributorManagedInsightRules <a name="DataAwsCloudwatchContributorManagedInsightRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules aws_cloudwatch_contributor_managed_insight_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

new dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules(scope: Construct, id: string, config: DataAwsCloudwatchContributorManagedInsightRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig">DataAwsCloudwatchContributorManagedInsightRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig">DataAwsCloudwatchContributorManagedInsightRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudwatchContributorManagedInsightRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCloudwatchContributorManagedInsightRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudwatchContributorManagedInsightRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudwatchContributorManagedInsightRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudwatchContributorManagedInsightRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.managedRules">managedRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `managedRules`<sup>Required</sup> <a name="managedRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.managedRules"></a>

```typescript
public readonly managedRules: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudwatchContributorManagedInsightRulesConfig <a name="DataAwsCloudwatchContributorManagedInsightRulesConfig" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

const dataAwsCloudwatchContributorManagedInsightRulesConfig: dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#region DataAwsCloudwatchContributorManagedInsightRules#region}

---

### DataAwsCloudwatchContributorManagedInsightRulesManagedRules <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

const dataAwsCloudwatchContributorManagedInsightRulesManagedRules: dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules = { ... }
```


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

const dataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState: dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

new dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get"></a>

```typescript
public get(index: number): DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

new dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.ruleState">ruleState</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules">DataAwsCloudwatchContributorManagedInsightRulesManagedRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `ruleState`<sup>Required</sup> <a name="ruleState" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.ruleState"></a>

```typescript
public readonly ruleState: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList</a>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudwatchContributorManagedInsightRulesManagedRules;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules">DataAwsCloudwatchContributorManagedInsightRulesManagedRules</a>

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

new dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get"></a>

```typescript
public get(index: number): DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudwatchContributorManagedInsightRules } from '@cdktf/provider-aws'

new dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState</a>

---



