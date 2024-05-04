# `dataAwsBudgetsBudget` Submodule <a name="`dataAwsBudgetsBudget` Submodule" id="@cdktf/provider-aws.dataAwsBudgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBudgetsBudget <a name="DataAwsBudgetsBudget" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudget(scope: Construct, id: string, config: DataAwsBudgetsBudgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig">DataAwsBudgetsBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig">DataAwsBudgetsBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBudgetsBudget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsBudgetsBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBudgetsBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBudgetsBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBudgetsBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.autoAdjustData">autoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList">DataAwsBudgetsBudgetAutoAdjustDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetExceeded">budgetExceeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetLimit">budgetLimit</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList">DataAwsBudgetsBudgetBudgetLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetType">budgetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.calculatedSpend">calculatedSpend</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList">DataAwsBudgetsBudgetCalculatedSpendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costFilter">costFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList">DataAwsBudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList">DataAwsBudgetsBudgetCostTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList">DataAwsBudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.plannedLimit">plannedLimit</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList">DataAwsBudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodEnd">timePeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodStart">timePeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoAdjustData`<sup>Required</sup> <a name="autoAdjustData" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.autoAdjustData"></a>

```typescript
public readonly autoAdjustData: DataAwsBudgetsBudgetAutoAdjustDataList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList">DataAwsBudgetsBudgetAutoAdjustDataList</a>

---

##### `budgetExceeded`<sup>Required</sup> <a name="budgetExceeded" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetExceeded"></a>

```typescript
public readonly budgetExceeded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `budgetLimit`<sup>Required</sup> <a name="budgetLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetLimit"></a>

```typescript
public readonly budgetLimit: DataAwsBudgetsBudgetBudgetLimitList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList">DataAwsBudgetsBudgetBudgetLimitList</a>

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetType"></a>

```typescript
public readonly budgetType: string;
```

- *Type:* string

---

##### `calculatedSpend`<sup>Required</sup> <a name="calculatedSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.calculatedSpend"></a>

```typescript
public readonly calculatedSpend: DataAwsBudgetsBudgetCalculatedSpendList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList">DataAwsBudgetsBudgetCalculatedSpendList</a>

---

##### `costFilter`<sup>Required</sup> <a name="costFilter" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costFilter"></a>

```typescript
public readonly costFilter: DataAwsBudgetsBudgetCostFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList">DataAwsBudgetsBudgetCostFilterList</a>

---

##### `costTypes`<sup>Required</sup> <a name="costTypes" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costTypes"></a>

```typescript
public readonly costTypes: DataAwsBudgetsBudgetCostTypesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList">DataAwsBudgetsBudgetCostTypesList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.notification"></a>

```typescript
public readonly notification: DataAwsBudgetsBudgetNotificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList">DataAwsBudgetsBudgetNotificationList</a>

---

##### `plannedLimit`<sup>Required</sup> <a name="plannedLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.plannedLimit"></a>

```typescript
public readonly plannedLimit: DataAwsBudgetsBudgetPlannedLimitList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList">DataAwsBudgetsBudgetPlannedLimitList</a>

---

##### `timePeriodEnd`<sup>Required</sup> <a name="timePeriodEnd" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodEnd"></a>

```typescript
public readonly timePeriodEnd: string;
```

- *Type:* string

---

##### `timePeriodStart`<sup>Required</sup> <a name="timePeriodStart" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodStart"></a>

```typescript
public readonly timePeriodStart: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBudgetsBudgetAutoAdjustData <a name="DataAwsBudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetAutoAdjustData: dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData = { ... }
```


### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions: dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions = { ... }
```


### DataAwsBudgetsBudgetBudgetLimit <a name="DataAwsBudgetsBudgetBudgetLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetBudgetLimit: dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit = { ... }
```


### DataAwsBudgetsBudgetCalculatedSpend <a name="DataAwsBudgetsBudgetCalculatedSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetCalculatedSpend: dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend = { ... }
```


### DataAwsBudgetsBudgetCalculatedSpendActualSpend <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetCalculatedSpendActualSpend: dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend = { ... }
```


### DataAwsBudgetsBudgetConfig <a name="DataAwsBudgetsBudgetConfig" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetConfig: dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}.

---

### DataAwsBudgetsBudgetCostFilter <a name="DataAwsBudgetsBudgetCostFilter" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetCostFilter: dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter = { ... }
```


### DataAwsBudgetsBudgetCostTypes <a name="DataAwsBudgetsBudgetCostTypes" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetCostTypes: dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes = { ... }
```


### DataAwsBudgetsBudgetNotification <a name="DataAwsBudgetsBudgetNotification" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetNotification: dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification = { ... }
```


### DataAwsBudgetsBudgetPlannedLimit <a name="DataAwsBudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

const dataAwsBudgetsBudgetPlannedLimit: dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">budgetAdjustmentPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">lookbackAvailablePeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `budgetAdjustmentPeriod`<sup>Required</sup> <a name="budgetAdjustmentPeriod" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```typescript
public readonly budgetAdjustmentPeriod: number;
```

- *Type:* number

---

##### `lookbackAvailablePeriods`<sup>Required</sup> <a name="lookbackAvailablePeriods" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```typescript
public readonly lookbackAvailablePeriods: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### DataAwsBudgetsBudgetAutoAdjustDataList <a name="DataAwsBudgetsBudgetAutoAdjustDataList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetAutoAdjustDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetAutoAdjustDataOutputReference <a name="DataAwsBudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">autoAdjustType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">historicalOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">lastAutoAdjustTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData">DataAwsBudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoAdjustType`<sup>Required</sup> <a name="autoAdjustType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```typescript
public readonly autoAdjustType: string;
```

- *Type:* string

---

##### `historicalOptions`<sup>Required</sup> <a name="historicalOptions" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```typescript
public readonly historicalOptions: DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList</a>

---

##### `lastAutoAdjustTime`<sup>Required</sup> <a name="lastAutoAdjustTime" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```typescript
public readonly lastAutoAdjustTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetAutoAdjustData;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData">DataAwsBudgetsBudgetAutoAdjustData</a>

---


### DataAwsBudgetsBudgetBudgetLimitList <a name="DataAwsBudgetsBudgetBudgetLimitList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetBudgetLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetBudgetLimitOutputReference <a name="DataAwsBudgetsBudgetBudgetLimitOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit">DataAwsBudgetsBudgetBudgetLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetBudgetLimit;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit">DataAwsBudgetsBudgetBudgetLimit</a>

---


### DataAwsBudgetsBudgetCalculatedSpendActualSpendList <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpendList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend">DataAwsBudgetsBudgetCalculatedSpendActualSpend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetCalculatedSpendActualSpend;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend">DataAwsBudgetsBudgetCalculatedSpendActualSpend</a>

---


### DataAwsBudgetsBudgetCalculatedSpendList <a name="DataAwsBudgetsBudgetCalculatedSpendList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetCalculatedSpendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetCalculatedSpendOutputReference <a name="DataAwsBudgetsBudgetCalculatedSpendOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.actualSpend">actualSpend</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList">DataAwsBudgetsBudgetCalculatedSpendActualSpendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend">DataAwsBudgetsBudgetCalculatedSpend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualSpend`<sup>Required</sup> <a name="actualSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.actualSpend"></a>

```typescript
public readonly actualSpend: DataAwsBudgetsBudgetCalculatedSpendActualSpendList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList">DataAwsBudgetsBudgetCalculatedSpendActualSpendList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetCalculatedSpend;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend">DataAwsBudgetsBudgetCalculatedSpend</a>

---


### DataAwsBudgetsBudgetCostFilterList <a name="DataAwsBudgetsBudgetCostFilterList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetCostFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetCostFilterOutputReference <a name="DataAwsBudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter">DataAwsBudgetsBudgetCostFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetCostFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter">DataAwsBudgetsBudgetCostFilter</a>

---


### DataAwsBudgetsBudgetCostTypesList <a name="DataAwsBudgetsBudgetCostTypesList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetCostTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetCostTypesOutputReference <a name="DataAwsBudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeCredit">includeCredit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeDiscount">includeDiscount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRecurring">includeRecurring</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRefund">includeRefund</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSubscription">includeSubscription</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSupport">includeSupport</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeTax">includeTax</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeUpfront">includeUpfront</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useAmortized">useAmortized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useBlended">useBlended</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes">DataAwsBudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeCredit`<sup>Required</sup> <a name="includeCredit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```typescript
public readonly includeCredit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeDiscount`<sup>Required</sup> <a name="includeDiscount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```typescript
public readonly includeDiscount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeOtherSubscription`<sup>Required</sup> <a name="includeOtherSubscription" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```typescript
public readonly includeOtherSubscription: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeRecurring`<sup>Required</sup> <a name="includeRecurring" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```typescript
public readonly includeRecurring: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeRefund`<sup>Required</sup> <a name="includeRefund" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```typescript
public readonly includeRefund: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeSubscription`<sup>Required</sup> <a name="includeSubscription" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```typescript
public readonly includeSubscription: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeSupport`<sup>Required</sup> <a name="includeSupport" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```typescript
public readonly includeSupport: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeTax`<sup>Required</sup> <a name="includeTax" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```typescript
public readonly includeTax: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeUpfront`<sup>Required</sup> <a name="includeUpfront" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```typescript
public readonly includeUpfront: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `useAmortized`<sup>Required</sup> <a name="useAmortized" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```typescript
public readonly useAmortized: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `useBlended`<sup>Required</sup> <a name="useBlended" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```typescript
public readonly useBlended: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetCostTypes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes">DataAwsBudgetsBudgetCostTypes</a>

---


### DataAwsBudgetsBudgetNotificationList <a name="DataAwsBudgetsBudgetNotificationList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetNotificationOutputReference <a name="DataAwsBudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification">DataAwsBudgetsBudgetNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `subscriberEmailAddresses`<sup>Required</sup> <a name="subscriberEmailAddresses" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```typescript
public readonly subscriberEmailAddresses: string[];
```

- *Type:* string[]

---

##### `subscriberSnsTopicArns`<sup>Required</sup> <a name="subscriberSnsTopicArns" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```typescript
public readonly subscriberSnsTopicArns: string[];
```

- *Type:* string[]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetNotification;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification">DataAwsBudgetsBudgetNotification</a>

---


### DataAwsBudgetsBudgetPlannedLimitList <a name="DataAwsBudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get"></a>

```typescript
public get(index: number): DataAwsBudgetsBudgetPlannedLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBudgetsBudgetPlannedLimitOutputReference <a name="DataAwsBudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```typescript
import { dataAwsBudgetsBudget } from '@cdktf/provider-aws'

new dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit">DataAwsBudgetsBudgetPlannedLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBudgetsBudgetPlannedLimit;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit">DataAwsBudgetsBudgetPlannedLimit</a>

---



