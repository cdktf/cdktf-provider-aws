# `snsTopicSubscription` Submodule <a name="`snsTopicSubscription` Submodule" id="@cdktf/provider-aws.snsTopicSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription aws_sns_topic_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/provider-aws'

new snsTopicSubscription.SnsTopicSubscription(scope: Construct, id: string, config: SnsTopicSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig">SnsTopicSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig">SnsTopicSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes">resetConfirmationTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy">resetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms">resetEndpointAutoConfirms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy">resetFilterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicyScope">resetFilterPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery">resetRawMessageDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy">resetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn">resetSubscriptionRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetConfirmationTimeoutInMinutes` <a name="resetConfirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes"></a>

```typescript
public resetConfirmationTimeoutInMinutes(): void
```

##### `resetDeliveryPolicy` <a name="resetDeliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy"></a>

```typescript
public resetDeliveryPolicy(): void
```

##### `resetEndpointAutoConfirms` <a name="resetEndpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms"></a>

```typescript
public resetEndpointAutoConfirms(): void
```

##### `resetFilterPolicy` <a name="resetFilterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy"></a>

```typescript
public resetFilterPolicy(): void
```

##### `resetFilterPolicyScope` <a name="resetFilterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicyScope"></a>

```typescript
public resetFilterPolicyScope(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRawMessageDelivery` <a name="resetRawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery"></a>

```typescript
public resetRawMessageDelivery(): void
```

##### `resetRedrivePolicy` <a name="resetRedrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy"></a>

```typescript
public resetRedrivePolicy(): void
```

##### `resetSubscriptionRoleArn` <a name="resetSubscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn"></a>

```typescript
public resetSubscriptionRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/provider-aws'

snsTopicSubscription.SnsTopicSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/provider-aws'

snsTopicSubscription.SnsTopicSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/provider-aws'

snsTopicSubscription.SnsTopicSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated">confirmationWasAuthenticated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation">pendingConfirmation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput">confirmationTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput">deliveryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput">endpointAutoConfirmsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput">filterPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput">filterPolicyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput">rawMessageDeliveryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput">redrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput">subscriptionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes">confirmationTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy">deliveryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms">endpointAutoConfirms</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy">filterPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope">filterPolicyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery">rawMessageDelivery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn">subscriptionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `confirmationWasAuthenticated`<sup>Required</sup> <a name="confirmationWasAuthenticated" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated"></a>

```typescript
public readonly confirmationWasAuthenticated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `pendingConfirmation`<sup>Required</sup> <a name="pendingConfirmation" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation"></a>

```typescript
public readonly pendingConfirmation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `confirmationTimeoutInMinutesInput`<sup>Optional</sup> <a name="confirmationTimeoutInMinutesInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput"></a>

```typescript
public readonly confirmationTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `deliveryPolicyInput`<sup>Optional</sup> <a name="deliveryPolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput"></a>

```typescript
public readonly deliveryPolicyInput: string;
```

- *Type:* string

---

##### `endpointAutoConfirmsInput`<sup>Optional</sup> <a name="endpointAutoConfirmsInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput"></a>

```typescript
public readonly endpointAutoConfirmsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `filterPolicyInput`<sup>Optional</sup> <a name="filterPolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput"></a>

```typescript
public readonly filterPolicyInput: string;
```

- *Type:* string

---

##### `filterPolicyScopeInput`<sup>Optional</sup> <a name="filterPolicyScopeInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput"></a>

```typescript
public readonly filterPolicyScopeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `rawMessageDeliveryInput`<sup>Optional</sup> <a name="rawMessageDeliveryInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput"></a>

```typescript
public readonly rawMessageDeliveryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redrivePolicyInput`<sup>Optional</sup> <a name="redrivePolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput"></a>

```typescript
public readonly redrivePolicyInput: string;
```

- *Type:* string

---

##### `subscriptionRoleArnInput`<sup>Optional</sup> <a name="subscriptionRoleArnInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput"></a>

```typescript
public readonly subscriptionRoleArnInput: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `confirmationTimeoutInMinutes`<sup>Required</sup> <a name="confirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes"></a>

```typescript
public readonly confirmationTimeoutInMinutes: number;
```

- *Type:* number

---

##### `deliveryPolicy`<sup>Required</sup> <a name="deliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy"></a>

```typescript
public readonly deliveryPolicy: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `endpointAutoConfirms`<sup>Required</sup> <a name="endpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms"></a>

```typescript
public readonly endpointAutoConfirms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterPolicy`<sup>Required</sup> <a name="filterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy"></a>

```typescript
public readonly filterPolicy: string;
```

- *Type:* string

---

##### `filterPolicyScope`<sup>Required</sup> <a name="filterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope"></a>

```typescript
public readonly filterPolicyScope: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `rawMessageDelivery`<sup>Required</sup> <a name="rawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery"></a>

```typescript
public readonly rawMessageDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redrivePolicy`<sup>Required</sup> <a name="redrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

---

##### `subscriptionRoleArn`<sup>Required</sup> <a name="subscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn"></a>

```typescript
public readonly subscriptionRoleArn: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicSubscriptionConfig <a name="SnsTopicSubscriptionConfig" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.Initializer"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/provider-aws'

const snsTopicSubscriptionConfig: snsTopicSubscription.SnsTopicSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes">confirmationTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy">deliveryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms">endpointAutoConfirms</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy">filterPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope">filterPolicyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery">rawMessageDelivery</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn">subscriptionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}.

---

##### `confirmationTimeoutInMinutes`<sup>Optional</sup> <a name="confirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes"></a>

```typescript
public readonly confirmationTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}.

---

##### `deliveryPolicy`<sup>Optional</sup> <a name="deliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy"></a>

```typescript
public readonly deliveryPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}.

---

##### `endpointAutoConfirms`<sup>Optional</sup> <a name="endpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms"></a>

```typescript
public readonly endpointAutoConfirms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}.

---

##### `filterPolicy`<sup>Optional</sup> <a name="filterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy"></a>

```typescript
public readonly filterPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}.

---

##### `filterPolicyScope`<sup>Optional</sup> <a name="filterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope"></a>

```typescript
public readonly filterPolicyScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rawMessageDelivery`<sup>Optional</sup> <a name="rawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery"></a>

```typescript
public readonly rawMessageDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}.

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}.

---

##### `subscriptionRoleArn`<sup>Optional</sup> <a name="subscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn"></a>

```typescript
public readonly subscriptionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}.

---



