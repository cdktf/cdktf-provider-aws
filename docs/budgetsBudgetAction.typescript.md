# `budgetsBudgetAction` Submodule <a name="`budgetsBudgetAction` Submodule" id="@cdktf/provider-aws.budgetsBudgetAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudgetAction <a name="BudgetsBudgetAction" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action aws_budgets_budget_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetAction(scope: Construct, id: string, config: BudgetsBudgetActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig">BudgetsBudgetActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig">BudgetsBudgetActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold">putActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber">putSubscriber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putActionThreshold` <a name="putActionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold"></a>

```typescript
public putActionThreshold(value: BudgetsBudgetActionActionThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putActionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---

##### `putDefinition` <a name="putDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition"></a>

```typescript
public putDefinition(value: BudgetsBudgetActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---

##### `putSubscriber` <a name="putSubscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber"></a>

```typescript
public putSubscriber(value: IResolvable | BudgetsBudgetActionSubscriber[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.putSubscriber.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

budgetsBudgetAction.BudgetsBudgetAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference">BudgetsBudgetActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference">BudgetsBudgetActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriber">subscriber</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList">BudgetsBudgetActionSubscriberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThresholdInput">actionThresholdInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModelInput">approvalModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetNameInput">budgetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definitionInput">definitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriberInput">subscriberInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModel">approvalModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetName">budgetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThreshold"></a>

```typescript
public readonly actionThreshold: BudgetsBudgetActionActionThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference">BudgetsBudgetActionActionThresholdOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definition"></a>

```typescript
public readonly definition: BudgetsBudgetActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference">BudgetsBudgetActionDefinitionOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriber"></a>

```typescript
public readonly subscriber: BudgetsBudgetActionSubscriberList;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList">BudgetsBudgetActionSubscriberList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `actionThresholdInput`<sup>Optional</sup> <a name="actionThresholdInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionThresholdInput"></a>

```typescript
public readonly actionThresholdInput: BudgetsBudgetActionActionThreshold;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `approvalModelInput`<sup>Optional</sup> <a name="approvalModelInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModelInput"></a>

```typescript
public readonly approvalModelInput: string;
```

- *Type:* string

---

##### `budgetNameInput`<sup>Optional</sup> <a name="budgetNameInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetNameInput"></a>

```typescript
public readonly budgetNameInput: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.definitionInput"></a>

```typescript
public readonly definitionInput: BudgetsBudgetActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `subscriberInput`<sup>Optional</sup> <a name="subscriberInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.subscriberInput"></a>

```typescript
public readonly subscriberInput: IResolvable | BudgetsBudgetActionSubscriber[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `approvalModel`<sup>Required</sup> <a name="approvalModel" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.approvalModel"></a>

```typescript
public readonly approvalModel: string;
```

- *Type:* string

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetActionActionThreshold <a name="BudgetsBudgetActionActionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

const budgetsBudgetActionActionThreshold: budgetsBudgetAction.BudgetsBudgetActionActionThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdType">actionThresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdValue">actionThresholdValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}. |

---

##### `actionThresholdType`<sup>Required</sup> <a name="actionThresholdType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdType"></a>

```typescript
public readonly actionThresholdType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}.

---

##### `actionThresholdValue`<sup>Required</sup> <a name="actionThresholdValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold.property.actionThresholdValue"></a>

```typescript
public readonly actionThresholdValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}.

---

### BudgetsBudgetActionConfig <a name="BudgetsBudgetActionConfig" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

const budgetsBudgetActionConfig: budgetsBudgetAction.BudgetsBudgetActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | action_threshold block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.approvalModel">approvalModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.budgetName">budgetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.subscriber">subscriber</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>[]</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionThreshold"></a>

```typescript
public readonly actionThreshold: BudgetsBudgetActionActionThreshold;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

action_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold BudgetsBudgetAction#action_threshold}

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}.

---

##### `approvalModel`<sup>Required</sup> <a name="approvalModel" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.approvalModel"></a>

```typescript
public readonly approvalModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}.

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.definition"></a>

```typescript
public readonly definition: BudgetsBudgetActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#definition BudgetsBudgetAction#definition}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.subscriber"></a>

```typescript
public readonly subscriber: IResolvable | BudgetsBudgetActionSubscriber[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>[]

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscriber BudgetsBudgetAction#subscriber}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BudgetsBudgetActionDefinition <a name="BudgetsBudgetActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

const budgetsBudgetActionDefinition: budgetsBudgetAction.BudgetsBudgetActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.iamActionDefinition">iamActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | iam_action_definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.scpActionDefinition">scpActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | scp_action_definition block. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.ssmActionDefinition">ssmActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | ssm_action_definition block. |

---

##### `iamActionDefinition`<sup>Optional</sup> <a name="iamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.iamActionDefinition"></a>

```typescript
public readonly iamActionDefinition: BudgetsBudgetActionDefinitionIamActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

iam_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#iam_action_definition BudgetsBudgetAction#iam_action_definition}

---

##### `scpActionDefinition`<sup>Optional</sup> <a name="scpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.scpActionDefinition"></a>

```typescript
public readonly scpActionDefinition: BudgetsBudgetActionDefinitionScpActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

scp_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#scp_action_definition BudgetsBudgetAction#scp_action_definition}

---

##### `ssmActionDefinition`<sup>Optional</sup> <a name="ssmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition.property.ssmActionDefinition"></a>

```typescript
public readonly ssmActionDefinition: BudgetsBudgetActionDefinitionSsmActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

ssm_action_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}

---

### BudgetsBudgetActionDefinitionIamActionDefinition <a name="BudgetsBudgetActionDefinitionIamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

const budgetsBudgetActionDefinitionIamActionDefinition: budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.policyArn">policyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.roles">roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}. |

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}.

---

### BudgetsBudgetActionDefinitionScpActionDefinition <a name="BudgetsBudgetActionDefinitionScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

const budgetsBudgetActionDefinitionScpActionDefinition: budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.targetIds">targetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}.

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}.

---

### BudgetsBudgetActionDefinitionSsmActionDefinition <a name="BudgetsBudgetActionDefinitionSsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

const budgetsBudgetActionDefinitionSsmActionDefinition: budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.actionSubType">actionSubType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.instanceIds">instanceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}. |

---

##### `actionSubType`<sup>Required</sup> <a name="actionSubType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.actionSubType"></a>

```typescript
public readonly actionSubType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}.

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.instanceIds"></a>

```typescript
public readonly instanceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}.

---

### BudgetsBudgetActionSubscriber <a name="BudgetsBudgetActionSubscriber" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

const budgetsBudgetActionSubscriber: budgetsBudgetAction.BudgetsBudgetActionSubscriber = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#address BudgetsBudgetAction#address}. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#address BudgetsBudgetAction#address}.

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetActionActionThresholdOutputReference <a name="BudgetsBudgetActionActionThresholdOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdTypeInput">actionThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValueInput">actionThresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdType">actionThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValue">actionThresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionThresholdTypeInput`<sup>Optional</sup> <a name="actionThresholdTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdTypeInput"></a>

```typescript
public readonly actionThresholdTypeInput: string;
```

- *Type:* string

---

##### `actionThresholdValueInput`<sup>Optional</sup> <a name="actionThresholdValueInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValueInput"></a>

```typescript
public readonly actionThresholdValueInput: number;
```

- *Type:* number

---

##### `actionThresholdType`<sup>Required</sup> <a name="actionThresholdType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdType"></a>

```typescript
public readonly actionThresholdType: string;
```

- *Type:* string

---

##### `actionThresholdValue`<sup>Required</sup> <a name="actionThresholdValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.actionThresholdValue"></a>

```typescript
public readonly actionThresholdValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetActionActionThreshold;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionActionThreshold">BudgetsBudgetActionActionThreshold</a>

---


### BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.resetUsers"></a>

```typescript
public resetUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput">policyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput"></a>

```typescript
public readonly policyArnInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetActionDefinitionIamActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---


### BudgetsBudgetActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition">putIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition">putScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition">putSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetIamActionDefinition">resetIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetScpActionDefinition">resetScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetSsmActionDefinition">resetSsmActionDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamActionDefinition` <a name="putIamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition"></a>

```typescript
public putIamActionDefinition(value: BudgetsBudgetActionDefinitionIamActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putIamActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---

##### `putScpActionDefinition` <a name="putScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition"></a>

```typescript
public putScpActionDefinition(value: BudgetsBudgetActionDefinitionScpActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putScpActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---

##### `putSsmActionDefinition` <a name="putSsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition"></a>

```typescript
public putSsmActionDefinition(value: BudgetsBudgetActionDefinitionSsmActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.putSsmActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---

##### `resetIamActionDefinition` <a name="resetIamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetIamActionDefinition"></a>

```typescript
public resetIamActionDefinition(): void
```

##### `resetScpActionDefinition` <a name="resetScpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetScpActionDefinition"></a>

```typescript
public resetScpActionDefinition(): void
```

##### `resetSsmActionDefinition` <a name="resetSsmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.resetSsmActionDefinition"></a>

```typescript
public resetSsmActionDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinition">iamActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinition">scpActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinition">ssmActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinitionInput">iamActionDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinitionInput">scpActionDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinitionInput">ssmActionDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamActionDefinition`<sup>Required</sup> <a name="iamActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinition"></a>

```typescript
public readonly iamActionDefinition: BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `scpActionDefinition`<sup>Required</sup> <a name="scpActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinition"></a>

```typescript
public readonly scpActionDefinition: BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `ssmActionDefinition`<sup>Required</sup> <a name="ssmActionDefinition" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```typescript
public readonly ssmActionDefinition: BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `iamActionDefinitionInput`<sup>Optional</sup> <a name="iamActionDefinitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.iamActionDefinitionInput"></a>

```typescript
public readonly iamActionDefinitionInput: BudgetsBudgetActionDefinitionIamActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionIamActionDefinition">BudgetsBudgetActionDefinitionIamActionDefinition</a>

---

##### `scpActionDefinitionInput`<sup>Optional</sup> <a name="scpActionDefinitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.scpActionDefinitionInput"></a>

```typescript
public readonly scpActionDefinitionInput: BudgetsBudgetActionDefinitionScpActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---

##### `ssmActionDefinitionInput`<sup>Optional</sup> <a name="ssmActionDefinitionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.ssmActionDefinitionInput"></a>

```typescript
public readonly ssmActionDefinitionInput: BudgetsBudgetActionDefinitionSsmActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinition">BudgetsBudgetActionDefinition</a>

---


### BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput">targetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `targetIdsInput`<sup>Optional</sup> <a name="targetIdsInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput"></a>

```typescript
public readonly targetIdsInput: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetActionDefinitionScpActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionScpActionDefinition">BudgetsBudgetActionDefinitionScpActionDefinition</a>

---


### BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference <a name="BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubTypeInput">actionSubTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput">instanceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubType">actionSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">instanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionSubTypeInput`<sup>Optional</sup> <a name="actionSubTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubTypeInput"></a>

```typescript
public readonly actionSubTypeInput: string;
```

- *Type:* string

---

##### `instanceIdsInput`<sup>Optional</sup> <a name="instanceIdsInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput"></a>

```typescript
public readonly instanceIdsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `actionSubType`<sup>Required</sup> <a name="actionSubType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.actionSubType"></a>

```typescript
public readonly actionSubType: string;
```

- *Type:* string

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```typescript
public readonly instanceIds: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetActionDefinitionSsmActionDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionDefinitionSsmActionDefinition">BudgetsBudgetActionDefinitionSsmActionDefinition</a>

---


### BudgetsBudgetActionSubscriberList <a name="BudgetsBudgetActionSubscriberList" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetActionSubscriberList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get"></a>

```typescript
public get(index: number): BudgetsBudgetActionSubscriberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetActionSubscriber[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a>[]

---


### BudgetsBudgetActionSubscriberOutputReference <a name="BudgetsBudgetActionSubscriberOutputReference" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetAction } from '@cdktf/provider-aws'

new budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionTypeInput">subscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `subscriptionTypeInput`<sup>Optional</sup> <a name="subscriptionTypeInput" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionTypeInput"></a>

```typescript
public readonly subscriptionTypeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetActionSubscriber | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.budgetsBudgetAction.BudgetsBudgetActionSubscriber">BudgetsBudgetActionSubscriber</a> | cdktf.IResolvable

---



