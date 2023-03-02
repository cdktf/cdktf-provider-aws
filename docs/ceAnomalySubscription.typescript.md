# `ceAnomalySubscription` Submodule <a name="`ceAnomalySubscription` Submodule" id="@cdktf/provider-aws.ceAnomalySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalySubscription <a name="CeAnomalySubscription" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription aws_ce_anomaly_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscription(scope: Construct, id: string, config: CeAnomalySubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig">CeAnomalySubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig">CeAnomalySubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber">putSubscriber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression">putThresholdExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression">resetThresholdExpression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSubscriber` <a name="putSubscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber"></a>

```typescript
public putSubscriber(value: IResolvable | CeAnomalySubscriptionSubscriber[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>[]

---

##### `putThresholdExpression` <a name="putThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression"></a>

```typescript
public putThresholdExpression(value: CeAnomalySubscriptionThresholdExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

##### `resetThresholdExpression` <a name="resetThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression"></a>

```typescript
public resetThresholdExpression(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

ceAnomalySubscription.CeAnomalySubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

ceAnomalySubscription.CeAnomalySubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

ceAnomalySubscription.CeAnomalySubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber">subscriber</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression">thresholdExpression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput">monitorArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput">subscriberInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput">thresholdExpressionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList">monitorArnList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber"></a>

```typescript
public readonly subscriber: CeAnomalySubscriptionSubscriberList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a>

---

##### `thresholdExpression`<sup>Required</sup> <a name="thresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression"></a>

```typescript
public readonly thresholdExpression: CeAnomalySubscriptionThresholdExpressionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monitorArnListInput`<sup>Optional</sup> <a name="monitorArnListInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput"></a>

```typescript
public readonly monitorArnListInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subscriberInput`<sup>Optional</sup> <a name="subscriberInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput"></a>

```typescript
public readonly subscriberInput: IResolvable | CeAnomalySubscriptionSubscriber[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `thresholdExpressionInput`<sup>Optional</sup> <a name="thresholdExpressionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput"></a>

```typescript
public readonly thresholdExpressionInput: CeAnomalySubscriptionThresholdExpression;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList"></a>

```typescript
public readonly monitorArnList: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalySubscriptionConfig <a name="CeAnomalySubscriptionConfig" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionConfig: ceAnomalySubscription.CeAnomalySubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList">monitorArnList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber">subscriber</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>[]</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression">thresholdExpression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | threshold_expression block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}.

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList"></a>

```typescript
public readonly monitorArnList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber"></a>

```typescript
public readonly subscriber: IResolvable | CeAnomalySubscriptionSubscriber[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>[]

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#subscriber CeAnomalySubscription#subscriber}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}.

---

##### `thresholdExpression`<sup>Optional</sup> <a name="thresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression"></a>

```typescript
public readonly thresholdExpression: CeAnomalySubscriptionThresholdExpression;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

threshold_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

### CeAnomalySubscriptionSubscriber <a name="CeAnomalySubscriptionSubscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionSubscriber: ceAnomalySubscription.CeAnomalySubscriptionSubscriber = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}.

---

### CeAnomalySubscriptionThresholdExpression <a name="CeAnomalySubscriptionThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpression: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>[]</code> | and block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or">or</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>[]</code> | or block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and"></a>

```typescript
public readonly and: IResolvable | CeAnomalySubscriptionThresholdExpressionAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#and CeAnomalySubscription#and}

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not"></a>

```typescript
public readonly not: CeAnomalySubscriptionThresholdExpressionNot;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#not CeAnomalySubscription#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or"></a>

```typescript
public readonly or: IResolvable | CeAnomalySubscriptionThresholdExpressionOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>[]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#or CeAnomalySubscription#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAnd <a name="CeAnomalySubscriptionThresholdExpressionAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionAnd: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAndCostCategory <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionAndCostCategory: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndDimension <a name="CeAnomalySubscriptionThresholdExpressionAndDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionAndDimension: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndTags <a name="CeAnomalySubscriptionThresholdExpressionAndTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionAndTags: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionCostCategory <a name="CeAnomalySubscriptionThresholdExpressionCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionCostCategory: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionDimension <a name="CeAnomalySubscriptionThresholdExpressionDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionDimension: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNot <a name="CeAnomalySubscriptionThresholdExpressionNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionNot: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionNotCostCategory <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionNotCostCategory: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotDimension <a name="CeAnomalySubscriptionThresholdExpressionNotDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionNotDimension: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotTags <a name="CeAnomalySubscriptionThresholdExpressionNotTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionNotTags: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOr <a name="CeAnomalySubscriptionThresholdExpressionOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionOr: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionOrCostCategory <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionOrCostCategory: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrDimension <a name="CeAnomalySubscriptionThresholdExpressionOrDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionOrDimension: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrTags <a name="CeAnomalySubscriptionThresholdExpressionOrTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionOrTags: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionTags <a name="CeAnomalySubscriptionThresholdExpressionTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

const ceAnomalySubscriptionThresholdExpressionTags: ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalySubscriptionSubscriberList <a name="CeAnomalySubscriptionSubscriberList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionSubscriberList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get"></a>

```typescript
public get(index: number): CeAnomalySubscriptionSubscriberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeAnomalySubscriptionSubscriber[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>[]

---


### CeAnomalySubscriptionSubscriberOutputReference <a name="CeAnomalySubscriptionSubscriberOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionSubscriber | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a> | cdktf.IResolvable

---


### CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionAndList <a name="CeAnomalySubscriptionThresholdExpressionAndList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get"></a>

```typescript
public get(index: number): CeAnomalySubscriptionThresholdExpressionAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeAnomalySubscriptionThresholdExpressionAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>[]

---


### CeAnomalySubscriptionThresholdExpressionAndOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeAnomalySubscriptionThresholdExpressionAndCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeAnomalySubscriptionThresholdExpressionAndDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags"></a>

```typescript
public putTags(value: CeAnomalySubscriptionThresholdExpressionAndTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeAnomalySubscriptionThresholdExpressionAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeAnomalySubscriptionThresholdExpressionAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeAnomalySubscriptionThresholdExpressionAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionAnd | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a> | cdktf.IResolvable

---


### CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---


### CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeAnomalySubscriptionThresholdExpressionNotCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeAnomalySubscriptionThresholdExpressionNotDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags"></a>

```typescript
public putTags(value: CeAnomalySubscriptionThresholdExpressionNotTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeAnomalySubscriptionThresholdExpressionNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeAnomalySubscriptionThresholdExpressionNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeAnomalySubscriptionThresholdExpressionNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionNot;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---


### CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionOrList <a name="CeAnomalySubscriptionThresholdExpressionOrList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get"></a>

```typescript
public get(index: number): CeAnomalySubscriptionThresholdExpressionOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeAnomalySubscriptionThresholdExpressionOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>[]

---


### CeAnomalySubscriptionThresholdExpressionOrOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeAnomalySubscriptionThresholdExpressionOrCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeAnomalySubscriptionThresholdExpressionOrDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags"></a>

```typescript
public putTags(value: CeAnomalySubscriptionThresholdExpressionOrTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeAnomalySubscriptionThresholdExpressionOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeAnomalySubscriptionThresholdExpressionOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeAnomalySubscriptionThresholdExpressionOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionOr | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a> | cdktf.IResolvable

---


### CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr">resetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | CeAnomalySubscriptionThresholdExpressionAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>[]

---

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeAnomalySubscriptionThresholdExpressionCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeAnomalySubscriptionThresholdExpressionDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---

##### `putNot` <a name="putNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot"></a>

```typescript
public putNot(value: CeAnomalySubscriptionThresholdExpressionNot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---

##### `putOr` <a name="putOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr"></a>

```typescript
public putOr(value: IResolvable | CeAnomalySubscriptionThresholdExpressionOr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags"></a>

```typescript
public putTags(value: CeAnomalySubscriptionThresholdExpressionTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetNot` <a name="resetNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot"></a>

```typescript
public resetNot(): void
```

##### `resetOr` <a name="resetOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr"></a>

```typescript
public resetOr(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput">notInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput">orInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and"></a>

```typescript
public readonly and: CeAnomalySubscriptionThresholdExpressionAndList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a>

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeAnomalySubscriptionThresholdExpressionDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not"></a>

```typescript
public readonly not: CeAnomalySubscriptionThresholdExpressionNotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or"></a>

```typescript
public readonly or: CeAnomalySubscriptionThresholdExpressionOrList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags"></a>

```typescript
public readonly tags: CeAnomalySubscriptionThresholdExpressionTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | CeAnomalySubscriptionThresholdExpressionAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>[]

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeAnomalySubscriptionThresholdExpressionCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeAnomalySubscriptionThresholdExpressionDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput"></a>

```typescript
public readonly notInput: CeAnomalySubscriptionThresholdExpressionNot;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput"></a>

```typescript
public readonly orInput: IResolvable | CeAnomalySubscriptionThresholdExpressionOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeAnomalySubscriptionThresholdExpressionTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpression;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---


### CeAnomalySubscriptionThresholdExpressionTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer"></a>

```typescript
import { ceAnomalySubscription } from '@cdktf/provider-aws'

new ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeAnomalySubscriptionThresholdExpressionTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---



