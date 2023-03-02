# `budgetsBudget` Submodule <a name="`budgetsBudget` Submodule" id="@cdktf/provider-aws.budgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudget <a name="BudgetsBudget" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudget(scope: Construct, id: string, config: BudgetsBudgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig">BudgetsBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig">BudgetsBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData">putAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter">putCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes">putCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit">putPlannedLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData">resetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter">resetCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters">resetCostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes">resetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount">resetLimitAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit">resetLimitUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit">resetPlannedLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd">resetTimePeriodEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart">resetTimePeriodStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoAdjustData` <a name="putAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData"></a>

```typescript
public putAutoAdjustData(value: BudgetsBudgetAutoAdjustData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putAutoAdjustData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `putCostFilter` <a name="putCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter"></a>

```typescript
public putCostFilter(value: IResolvable | BudgetsBudgetCostFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

---

##### `putCostTypes` <a name="putCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes"></a>

```typescript
public putCostTypes(value: BudgetsBudgetCostTypes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putCostTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `putNotification` <a name="putNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification"></a>

```typescript
public putNotification(value: IResolvable | BudgetsBudgetNotification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putNotification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

---

##### `putPlannedLimit` <a name="putPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit"></a>

```typescript
public putPlannedLimit(value: IResolvable | BudgetsBudgetPlannedLimit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.putPlannedLimit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAutoAdjustData` <a name="resetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetAutoAdjustData"></a>

```typescript
public resetAutoAdjustData(): void
```

##### `resetCostFilter` <a name="resetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilter"></a>

```typescript
public resetCostFilter(): void
```

##### `resetCostFilters` <a name="resetCostFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostFilters"></a>

```typescript
public resetCostFilters(): void
```

##### `resetCostTypes` <a name="resetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetCostTypes"></a>

```typescript
public resetCostTypes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimitAmount` <a name="resetLimitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitAmount"></a>

```typescript
public resetLimitAmount(): void
```

##### `resetLimitUnit` <a name="resetLimitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetLimitUnit"></a>

```typescript
public resetLimitUnit(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetNotification"></a>

```typescript
public resetNotification(): void
```

##### `resetPlannedLimit` <a name="resetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetPlannedLimit"></a>

```typescript
public resetPlannedLimit(): void
```

##### `resetTimePeriodEnd` <a name="resetTimePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodEnd"></a>

```typescript
public resetTimePeriodEnd(): void
```

##### `resetTimePeriodStart` <a name="resetTimePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.resetTimePeriodStart"></a>

```typescript
public resetTimePeriodStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

budgetsBudget.BudgetsBudget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

budgetsBudget.BudgetsBudget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

budgetsBudget.BudgetsBudget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData">autoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter">costFilter</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit">plannedLimit</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput">autoAdjustDataInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput">budgetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput">costFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput">costFiltersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput">costTypesInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput">limitAmountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput">limitUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput">notificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput">plannedLimitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput">timePeriodEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput">timePeriodStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType">budgetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters">costFilters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount">limitAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit">limitUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd">timePeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart">timePeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoAdjustData`<sup>Required</sup> <a name="autoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustData"></a>

```typescript
public readonly autoAdjustData: BudgetsBudgetAutoAdjustDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference">BudgetsBudgetAutoAdjustDataOutputReference</a>

---

##### `costFilter`<sup>Required</sup> <a name="costFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilter"></a>

```typescript
public readonly costFilter: BudgetsBudgetCostFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a>

---

##### `costTypes`<sup>Required</sup> <a name="costTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypes"></a>

```typescript
public readonly costTypes: BudgetsBudgetCostTypesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notification"></a>

```typescript
public readonly notification: BudgetsBudgetNotificationList;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a>

---

##### `plannedLimit`<sup>Required</sup> <a name="plannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimit"></a>

```typescript
public readonly plannedLimit: BudgetsBudgetPlannedLimitList;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList">BudgetsBudgetPlannedLimitList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `autoAdjustDataInput`<sup>Optional</sup> <a name="autoAdjustDataInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.autoAdjustDataInput"></a>

```typescript
public readonly autoAdjustDataInput: BudgetsBudgetAutoAdjustData;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---

##### `budgetTypeInput`<sup>Optional</sup> <a name="budgetTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetTypeInput"></a>

```typescript
public readonly budgetTypeInput: string;
```

- *Type:* string

---

##### `costFilterInput`<sup>Optional</sup> <a name="costFilterInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilterInput"></a>

```typescript
public readonly costFilterInput: IResolvable | BudgetsBudgetCostFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

---

##### `costFiltersInput`<sup>Optional</sup> <a name="costFiltersInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFiltersInput"></a>

```typescript
public readonly costFiltersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `costTypesInput`<sup>Optional</sup> <a name="costTypesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costTypesInput"></a>

```typescript
public readonly costTypesInput: BudgetsBudgetCostTypes;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitAmountInput`<sup>Optional</sup> <a name="limitAmountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmountInput"></a>

```typescript
public readonly limitAmountInput: string;
```

- *Type:* string

---

##### `limitUnitInput`<sup>Optional</sup> <a name="limitUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnitInput"></a>

```typescript
public readonly limitUnitInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.notificationInput"></a>

```typescript
public readonly notificationInput: IResolvable | BudgetsBudgetNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

---

##### `plannedLimitInput`<sup>Optional</sup> <a name="plannedLimitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.plannedLimitInput"></a>

```typescript
public readonly plannedLimitInput: IResolvable | BudgetsBudgetPlannedLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>[]

---

##### `timePeriodEndInput`<sup>Optional</sup> <a name="timePeriodEndInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEndInput"></a>

```typescript
public readonly timePeriodEndInput: string;
```

- *Type:* string

---

##### `timePeriodStartInput`<sup>Optional</sup> <a name="timePeriodStartInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStartInput"></a>

```typescript
public readonly timePeriodStartInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.budgetType"></a>

```typescript
public readonly budgetType: string;
```

- *Type:* string

---

##### `costFilters`<sup>Required</sup> <a name="costFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.costFilters"></a>

```typescript
public readonly costFilters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitAmount`<sup>Required</sup> <a name="limitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitAmount"></a>

```typescript
public readonly limitAmount: string;
```

- *Type:* string

---

##### `limitUnit`<sup>Required</sup> <a name="limitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.limitUnit"></a>

```typescript
public readonly limitUnit: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `timePeriodEnd`<sup>Required</sup> <a name="timePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodEnd"></a>

```typescript
public readonly timePeriodEnd: string;
```

- *Type:* string

---

##### `timePeriodStart`<sup>Required</sup> <a name="timePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timePeriodStart"></a>

```typescript
public readonly timePeriodStart: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetAutoAdjustData <a name="BudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

const budgetsBudgetAutoAdjustData: budgetsBudget.BudgetsBudgetAutoAdjustData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType">autoAdjustType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions">historicalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | historical_options block. |

---

##### `autoAdjustType`<sup>Required</sup> <a name="autoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.autoAdjustType"></a>

```typescript
public readonly autoAdjustType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}.

---

##### `historicalOptions`<sup>Optional</sup> <a name="historicalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData.property.historicalOptions"></a>

```typescript
public readonly historicalOptions: BudgetsBudgetAutoAdjustDataHistoricalOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

historical_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#historical_options BudgetsBudget#historical_options}

---

### BudgetsBudgetAutoAdjustDataHistoricalOptions <a name="BudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

const budgetsBudgetAutoAdjustDataHistoricalOptions: budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod">budgetAdjustmentPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}. |

---

##### `budgetAdjustmentPeriod`<sup>Required</sup> <a name="budgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions.property.budgetAdjustmentPeriod"></a>

```typescript
public readonly budgetAdjustmentPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}.

---

### BudgetsBudgetConfig <a name="BudgetsBudgetConfig" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

const budgetsBudgetConfig: budgetsBudget.BudgetsBudgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType">budgetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit">timeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData">autoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | auto_adjust_data block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter">costFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]</code> | cost_filter block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters">costFilters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount">limitAmount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit">limitUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification">notification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]</code> | notification block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit">plannedLimit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>[]</code> | planned_limit block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd">timePeriodEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart">timePeriodStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.budgetType"></a>

```typescript
public readonly budgetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `autoAdjustData`<sup>Optional</sup> <a name="autoAdjustData" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.autoAdjustData"></a>

```typescript
public readonly autoAdjustData: BudgetsBudgetAutoAdjustData;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

auto_adjust_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}

---

##### `costFilter`<sup>Optional</sup> <a name="costFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilter"></a>

```typescript
public readonly costFilter: IResolvable | BudgetsBudgetCostFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

cost_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `costFilters`<sup>Optional</sup> <a name="costFilters" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costFilters"></a>

```typescript
public readonly costFilters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `costTypes`<sup>Optional</sup> <a name="costTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.costTypes"></a>

```typescript
public readonly costTypes: BudgetsBudgetCostTypes;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitAmount`<sup>Optional</sup> <a name="limitAmount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitAmount"></a>

```typescript
public readonly limitAmount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `limitUnit`<sup>Optional</sup> <a name="limitUnit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.limitUnit"></a>

```typescript
public readonly limitUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.notification"></a>

```typescript
public readonly notification: IResolvable | BudgetsBudgetNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}

---

##### `plannedLimit`<sup>Optional</sup> <a name="plannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.plannedLimit"></a>

```typescript
public readonly plannedLimit: IResolvable | BudgetsBudgetPlannedLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>[]

planned_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#planned_limit BudgetsBudget#planned_limit}

---

##### `timePeriodEnd`<sup>Optional</sup> <a name="timePeriodEnd" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd"></a>

```typescript
public readonly timePeriodEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `timePeriodStart`<sup>Optional</sup> <a name="timePeriodStart" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart"></a>

```typescript
public readonly timePeriodStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

### BudgetsBudgetCostFilter <a name="BudgetsBudgetCostFilter" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

const budgetsBudgetCostFilter: budgetsBudget.BudgetsBudgetCostFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}.

---

### BudgetsBudgetCostTypes <a name="BudgetsBudgetCostTypes" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

const budgetsBudgetCostTypes: budgetsBudget.BudgetsBudgetCostTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit">includeCredit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount">includeDiscount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring">includeRecurring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund">includeRefund</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription">includeSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport">includeSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax">includeTax</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront">includeUpfront</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized">useAmortized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended">useBlended</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}. |

---

##### `includeCredit`<sup>Optional</sup> <a name="includeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit"></a>

```typescript
public readonly includeCredit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}.

---

##### `includeDiscount`<sup>Optional</sup> <a name="includeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount"></a>

```typescript
public readonly includeDiscount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}.

---

##### `includeOtherSubscription`<sup>Optional</sup> <a name="includeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription"></a>

```typescript
public readonly includeOtherSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}.

---

##### `includeRecurring`<sup>Optional</sup> <a name="includeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring"></a>

```typescript
public readonly includeRecurring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}.

---

##### `includeRefund`<sup>Optional</sup> <a name="includeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund"></a>

```typescript
public readonly includeRefund: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}.

---

##### `includeSubscription`<sup>Optional</sup> <a name="includeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription"></a>

```typescript
public readonly includeSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}.

---

##### `includeSupport`<sup>Optional</sup> <a name="includeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport"></a>

```typescript
public readonly includeSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}.

---

##### `includeTax`<sup>Optional</sup> <a name="includeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax"></a>

```typescript
public readonly includeTax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}.

---

##### `includeUpfront`<sup>Optional</sup> <a name="includeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront"></a>

```typescript
public readonly includeUpfront: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}.

---

##### `useAmortized`<sup>Optional</sup> <a name="useAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized"></a>

```typescript
public readonly useAmortized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}.

---

##### `useBlended`<sup>Optional</sup> <a name="useBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended"></a>

```typescript
public readonly useBlended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}.

---

### BudgetsBudgetNotification <a name="BudgetsBudgetNotification" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

const budgetsBudgetNotification: budgetsBudget.BudgetsBudgetNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType">thresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}.

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}.

---

##### `subscriberEmailAddresses`<sup>Optional</sup> <a name="subscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses"></a>

```typescript
public readonly subscriberEmailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}.

---

##### `subscriberSnsTopicArns`<sup>Optional</sup> <a name="subscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns"></a>

```typescript
public readonly subscriberSnsTopicArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}.

---

### BudgetsBudgetPlannedLimit <a name="BudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

const budgetsBudgetPlannedLimit: budgetsBudget.BudgetsBudgetPlannedLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount">amount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#amount BudgetsBudget#amount}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#start_time BudgetsBudget#start_time}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#unit BudgetsBudget#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">lookbackAvailablePeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput">budgetAdjustmentPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">budgetAdjustmentPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lookbackAvailablePeriods`<sup>Required</sup> <a name="lookbackAvailablePeriods" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```typescript
public readonly lookbackAvailablePeriods: number;
```

- *Type:* number

---

##### `budgetAdjustmentPeriodInput`<sup>Optional</sup> <a name="budgetAdjustmentPeriodInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriodInput"></a>

```typescript
public readonly budgetAdjustmentPeriodInput: number;
```

- *Type:* number

---

##### `budgetAdjustmentPeriod`<sup>Required</sup> <a name="budgetAdjustmentPeriod" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```typescript
public readonly budgetAdjustmentPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetAutoAdjustDataHistoricalOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### BudgetsBudgetAutoAdjustDataOutputReference <a name="BudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions">putHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions">resetHistoricalOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHistoricalOptions` <a name="putHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions"></a>

```typescript
public putHistoricalOptions(value: BudgetsBudgetAutoAdjustDataHistoricalOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.putHistoricalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `resetHistoricalOptions` <a name="resetHistoricalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.resetHistoricalOptions"></a>

```typescript
public resetHistoricalOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">historicalOptions</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">lastAutoAdjustTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput">autoAdjustTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput">historicalOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">autoAdjustType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `historicalOptions`<sup>Required</sup> <a name="historicalOptions" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```typescript
public readonly historicalOptions: BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference">BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference</a>

---

##### `lastAutoAdjustTime`<sup>Required</sup> <a name="lastAutoAdjustTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```typescript
public readonly lastAutoAdjustTime: string;
```

- *Type:* string

---

##### `autoAdjustTypeInput`<sup>Optional</sup> <a name="autoAdjustTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustTypeInput"></a>

```typescript
public readonly autoAdjustTypeInput: string;
```

- *Type:* string

---

##### `historicalOptionsInput`<sup>Optional</sup> <a name="historicalOptionsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptionsInput"></a>

```typescript
public readonly historicalOptionsInput: BudgetsBudgetAutoAdjustDataHistoricalOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataHistoricalOptions">BudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---

##### `autoAdjustType`<sup>Required</sup> <a name="autoAdjustType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```typescript
public readonly autoAdjustType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetAutoAdjustData;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetAutoAdjustData">BudgetsBudgetAutoAdjustData</a>

---


### BudgetsBudgetCostFilterList <a name="BudgetsBudgetCostFilterList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetCostFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get"></a>

```typescript
public get(index: number): BudgetsBudgetCostFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetCostFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

---


### BudgetsBudgetCostFilterOutputReference <a name="BudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetCostFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetCostFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a> | cdktf.IResolvable

---


### BudgetsBudgetCostTypesOutputReference <a name="BudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetCostTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit">resetIncludeCredit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount">resetIncludeDiscount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription">resetIncludeOtherSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring">resetIncludeRecurring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund">resetIncludeRefund</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription">resetIncludeSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport">resetIncludeSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax">resetIncludeTax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront">resetIncludeUpfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized">resetUseAmortized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended">resetUseBlended</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeCredit` <a name="resetIncludeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit"></a>

```typescript
public resetIncludeCredit(): void
```

##### `resetIncludeDiscount` <a name="resetIncludeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount"></a>

```typescript
public resetIncludeDiscount(): void
```

##### `resetIncludeOtherSubscription` <a name="resetIncludeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription"></a>

```typescript
public resetIncludeOtherSubscription(): void
```

##### `resetIncludeRecurring` <a name="resetIncludeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring"></a>

```typescript
public resetIncludeRecurring(): void
```

##### `resetIncludeRefund` <a name="resetIncludeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund"></a>

```typescript
public resetIncludeRefund(): void
```

##### `resetIncludeSubscription` <a name="resetIncludeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription"></a>

```typescript
public resetIncludeSubscription(): void
```

##### `resetIncludeSupport` <a name="resetIncludeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport"></a>

```typescript
public resetIncludeSupport(): void
```

##### `resetIncludeTax` <a name="resetIncludeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax"></a>

```typescript
public resetIncludeTax(): void
```

##### `resetIncludeUpfront` <a name="resetIncludeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront"></a>

```typescript
public resetIncludeUpfront(): void
```

##### `resetUseAmortized` <a name="resetUseAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized"></a>

```typescript
public resetUseAmortized(): void
```

##### `resetUseBlended` <a name="resetUseBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended"></a>

```typescript
public resetUseBlended(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput">includeCreditInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput">includeDiscountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput">includeOtherSubscriptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput">includeRecurringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput">includeRefundInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput">includeSubscriptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput">includeSupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput">includeTaxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput">includeUpfrontInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput">useAmortizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput">useBlendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit">includeCredit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount">includeDiscount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring">includeRecurring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund">includeRefund</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription">includeSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport">includeSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax">includeTax</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront">includeUpfront</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized">useAmortized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended">useBlended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeCreditInput`<sup>Optional</sup> <a name="includeCreditInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput"></a>

```typescript
public readonly includeCreditInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeDiscountInput`<sup>Optional</sup> <a name="includeDiscountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput"></a>

```typescript
public readonly includeDiscountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOtherSubscriptionInput`<sup>Optional</sup> <a name="includeOtherSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput"></a>

```typescript
public readonly includeOtherSubscriptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRecurringInput`<sup>Optional</sup> <a name="includeRecurringInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput"></a>

```typescript
public readonly includeRecurringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRefundInput`<sup>Optional</sup> <a name="includeRefundInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput"></a>

```typescript
public readonly includeRefundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSubscriptionInput`<sup>Optional</sup> <a name="includeSubscriptionInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput"></a>

```typescript
public readonly includeSubscriptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSupportInput`<sup>Optional</sup> <a name="includeSupportInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput"></a>

```typescript
public readonly includeSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTaxInput`<sup>Optional</sup> <a name="includeTaxInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput"></a>

```typescript
public readonly includeTaxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeUpfrontInput`<sup>Optional</sup> <a name="includeUpfrontInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput"></a>

```typescript
public readonly includeUpfrontInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useAmortizedInput`<sup>Optional</sup> <a name="useAmortizedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput"></a>

```typescript
public readonly useAmortizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useBlendedInput`<sup>Optional</sup> <a name="useBlendedInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput"></a>

```typescript
public readonly useBlendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeCredit`<sup>Required</sup> <a name="includeCredit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```typescript
public readonly includeCredit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeDiscount`<sup>Required</sup> <a name="includeDiscount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```typescript
public readonly includeDiscount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOtherSubscription`<sup>Required</sup> <a name="includeOtherSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```typescript
public readonly includeOtherSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRecurring`<sup>Required</sup> <a name="includeRecurring" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```typescript
public readonly includeRecurring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRefund`<sup>Required</sup> <a name="includeRefund" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```typescript
public readonly includeRefund: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSubscription`<sup>Required</sup> <a name="includeSubscription" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```typescript
public readonly includeSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSupport`<sup>Required</sup> <a name="includeSupport" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```typescript
public readonly includeSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTax`<sup>Required</sup> <a name="includeTax" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```typescript
public readonly includeTax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeUpfront`<sup>Required</sup> <a name="includeUpfront" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```typescript
public readonly includeUpfront: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useAmortized`<sup>Required</sup> <a name="useAmortized" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```typescript
public readonly useAmortized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useBlended`<sup>Required</sup> <a name="useBlended" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```typescript
public readonly useBlended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetCostTypes;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---


### BudgetsBudgetNotificationList <a name="BudgetsBudgetNotificationList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetNotificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get"></a>

```typescript
public get(index: number): BudgetsBudgetNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

---


### BudgetsBudgetNotificationOutputReference <a name="BudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses">resetSubscriberEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns">resetSubscriberSnsTopicArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriberEmailAddresses` <a name="resetSubscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses"></a>

```typescript
public resetSubscriberEmailAddresses(): void
```

##### `resetSubscriberSnsTopicArns` <a name="resetSubscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns"></a>

```typescript
public resetSubscriberSnsTopicArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput">subscriberEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput">subscriberSnsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `subscriberEmailAddressesInput`<sup>Optional</sup> <a name="subscriberEmailAddressesInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput"></a>

```typescript
public readonly subscriberEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `subscriberSnsTopicArnsInput`<sup>Optional</sup> <a name="subscriberSnsTopicArnsInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput"></a>

```typescript
public readonly subscriberSnsTopicArnsInput: string[];
```

- *Type:* string[]

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput"></a>

```typescript
public readonly thresholdTypeInput: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `subscriberEmailAddresses`<sup>Required</sup> <a name="subscriberEmailAddresses" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```typescript
public readonly subscriberEmailAddresses: string[];
```

- *Type:* string[]

---

##### `subscriberSnsTopicArns`<sup>Required</sup> <a name="subscriberSnsTopicArns" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```typescript
public readonly subscriberSnsTopicArns: string[];
```

- *Type:* string[]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetNotification | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a> | cdktf.IResolvable

---


### BudgetsBudgetPlannedLimitList <a name="BudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetPlannedLimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get"></a>

```typescript
public get(index: number): BudgetsBudgetPlannedLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetPlannedLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a>[]

---


### BudgetsBudgetPlannedLimitOutputReference <a name="BudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/provider-aws'

new budgetsBudget.BudgetsBudgetPlannedLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput">amountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetPlannedLimit | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudget.BudgetsBudgetPlannedLimit">BudgetsBudgetPlannedLimit</a> | cdktf.IResolvable

---



