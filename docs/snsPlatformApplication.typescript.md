# `snsPlatformApplication` Submodule <a name="`snsPlatformApplication` Submodule" id="@cdktf/provider-aws.snsPlatformApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsPlatformApplication <a name="SnsPlatformApplication" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application aws_sns_platform_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer"></a>

```typescript
import { snsPlatformApplication } from '@cdktf/provider-aws'

new snsPlatformApplication.SnsPlatformApplication(scope: Construct, id: string, config: SnsPlatformApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig">SnsPlatformApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig">SnsPlatformApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId">resetApplePlatformBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId">resetApplePlatformTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn">resetEventDeliveryFailureTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn">resetEventEndpointCreatedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn">resetEventEndpointDeletedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn">resetEventEndpointUpdatedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn">resetFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal">resetPlatformPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn">resetSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate">resetSuccessFeedbackSampleRate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApplePlatformBundleId` <a name="resetApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId"></a>

```typescript
public resetApplePlatformBundleId(): void
```

##### `resetApplePlatformTeamId` <a name="resetApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId"></a>

```typescript
public resetApplePlatformTeamId(): void
```

##### `resetEventDeliveryFailureTopicArn` <a name="resetEventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn"></a>

```typescript
public resetEventDeliveryFailureTopicArn(): void
```

##### `resetEventEndpointCreatedTopicArn` <a name="resetEventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn"></a>

```typescript
public resetEventEndpointCreatedTopicArn(): void
```

##### `resetEventEndpointDeletedTopicArn` <a name="resetEventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn"></a>

```typescript
public resetEventEndpointDeletedTopicArn(): void
```

##### `resetEventEndpointUpdatedTopicArn` <a name="resetEventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn"></a>

```typescript
public resetEventEndpointUpdatedTopicArn(): void
```

##### `resetFailureFeedbackRoleArn` <a name="resetFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn"></a>

```typescript
public resetFailureFeedbackRoleArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPlatformPrincipal` <a name="resetPlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal"></a>

```typescript
public resetPlatformPrincipal(): void
```

##### `resetSuccessFeedbackRoleArn` <a name="resetSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn"></a>

```typescript
public resetSuccessFeedbackRoleArn(): void
```

##### `resetSuccessFeedbackSampleRate` <a name="resetSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate"></a>

```typescript
public resetSuccessFeedbackSampleRate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct"></a>

```typescript
import { snsPlatformApplication } from '@cdktf/provider-aws'

snsPlatformApplication.SnsPlatformApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement"></a>

```typescript
import { snsPlatformApplication } from '@cdktf/provider-aws'

snsPlatformApplication.SnsPlatformApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource"></a>

```typescript
import { snsPlatformApplication } from '@cdktf/provider-aws'

snsPlatformApplication.SnsPlatformApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput">applePlatformBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput">applePlatformTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput">eventDeliveryFailureTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput">eventEndpointCreatedTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput">eventEndpointDeletedTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput">eventEndpointUpdatedTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput">failureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput">platformCredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput">platformPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput">successFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput">successFeedbackSampleRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId">applePlatformBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId">applePlatformTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn">eventDeliveryFailureTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn">eventEndpointCreatedTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn">eventEndpointDeletedTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn">eventEndpointUpdatedTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential">platformCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal">platformPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `applePlatformBundleIdInput`<sup>Optional</sup> <a name="applePlatformBundleIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput"></a>

```typescript
public readonly applePlatformBundleIdInput: string;
```

- *Type:* string

---

##### `applePlatformTeamIdInput`<sup>Optional</sup> <a name="applePlatformTeamIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput"></a>

```typescript
public readonly applePlatformTeamIdInput: string;
```

- *Type:* string

---

##### `eventDeliveryFailureTopicArnInput`<sup>Optional</sup> <a name="eventDeliveryFailureTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput"></a>

```typescript
public readonly eventDeliveryFailureTopicArnInput: string;
```

- *Type:* string

---

##### `eventEndpointCreatedTopicArnInput`<sup>Optional</sup> <a name="eventEndpointCreatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput"></a>

```typescript
public readonly eventEndpointCreatedTopicArnInput: string;
```

- *Type:* string

---

##### `eventEndpointDeletedTopicArnInput`<sup>Optional</sup> <a name="eventEndpointDeletedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput"></a>

```typescript
public readonly eventEndpointDeletedTopicArnInput: string;
```

- *Type:* string

---

##### `eventEndpointUpdatedTopicArnInput`<sup>Optional</sup> <a name="eventEndpointUpdatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput"></a>

```typescript
public readonly eventEndpointUpdatedTopicArnInput: string;
```

- *Type:* string

---

##### `failureFeedbackRoleArnInput`<sup>Optional</sup> <a name="failureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput"></a>

```typescript
public readonly failureFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformCredentialInput`<sup>Optional</sup> <a name="platformCredentialInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput"></a>

```typescript
public readonly platformCredentialInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `platformPrincipalInput`<sup>Optional</sup> <a name="platformPrincipalInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput"></a>

```typescript
public readonly platformPrincipalInput: string;
```

- *Type:* string

---

##### `successFeedbackRoleArnInput`<sup>Optional</sup> <a name="successFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput"></a>

```typescript
public readonly successFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `successFeedbackSampleRateInput`<sup>Optional</sup> <a name="successFeedbackSampleRateInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput"></a>

```typescript
public readonly successFeedbackSampleRateInput: string;
```

- *Type:* string

---

##### `applePlatformBundleId`<sup>Required</sup> <a name="applePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId"></a>

```typescript
public readonly applePlatformBundleId: string;
```

- *Type:* string

---

##### `applePlatformTeamId`<sup>Required</sup> <a name="applePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId"></a>

```typescript
public readonly applePlatformTeamId: string;
```

- *Type:* string

---

##### `eventDeliveryFailureTopicArn`<sup>Required</sup> <a name="eventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn"></a>

```typescript
public readonly eventDeliveryFailureTopicArn: string;
```

- *Type:* string

---

##### `eventEndpointCreatedTopicArn`<sup>Required</sup> <a name="eventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn"></a>

```typescript
public readonly eventEndpointCreatedTopicArn: string;
```

- *Type:* string

---

##### `eventEndpointDeletedTopicArn`<sup>Required</sup> <a name="eventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn"></a>

```typescript
public readonly eventEndpointDeletedTopicArn: string;
```

- *Type:* string

---

##### `eventEndpointUpdatedTopicArn`<sup>Required</sup> <a name="eventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn"></a>

```typescript
public readonly eventEndpointUpdatedTopicArn: string;
```

- *Type:* string

---

##### `failureFeedbackRoleArn`<sup>Required</sup> <a name="failureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn"></a>

```typescript
public readonly failureFeedbackRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `platformCredential`<sup>Required</sup> <a name="platformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential"></a>

```typescript
public readonly platformCredential: string;
```

- *Type:* string

---

##### `platformPrincipal`<sup>Required</sup> <a name="platformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal"></a>

```typescript
public readonly platformPrincipal: string;
```

- *Type:* string

---

##### `successFeedbackRoleArn`<sup>Required</sup> <a name="successFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn"></a>

```typescript
public readonly successFeedbackRoleArn: string;
```

- *Type:* string

---

##### `successFeedbackSampleRate`<sup>Required</sup> <a name="successFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate"></a>

```typescript
public readonly successFeedbackSampleRate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsPlatformApplicationConfig <a name="SnsPlatformApplicationConfig" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.Initializer"></a>

```typescript
import { snsPlatformApplication } from '@cdktf/provider-aws'

const snsPlatformApplicationConfig: snsPlatformApplication.SnsPlatformApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential">platformCredential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId">applePlatformBundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId">applePlatformTeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn">eventDeliveryFailureTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn">eventEndpointCreatedTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn">eventEndpointDeletedTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn">eventEndpointUpdatedTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal">platformPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}.

---

##### `platformCredential`<sup>Required</sup> <a name="platformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential"></a>

```typescript
public readonly platformCredential: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}.

---

##### `applePlatformBundleId`<sup>Optional</sup> <a name="applePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId"></a>

```typescript
public readonly applePlatformBundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}.

---

##### `applePlatformTeamId`<sup>Optional</sup> <a name="applePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId"></a>

```typescript
public readonly applePlatformTeamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}.

---

##### `eventDeliveryFailureTopicArn`<sup>Optional</sup> <a name="eventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn"></a>

```typescript
public readonly eventDeliveryFailureTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.

---

##### `eventEndpointCreatedTopicArn`<sup>Optional</sup> <a name="eventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn"></a>

```typescript
public readonly eventEndpointCreatedTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.

---

##### `eventEndpointDeletedTopicArn`<sup>Optional</sup> <a name="eventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn"></a>

```typescript
public readonly eventEndpointDeletedTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.

---

##### `eventEndpointUpdatedTopicArn`<sup>Optional</sup> <a name="eventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn"></a>

```typescript
public readonly eventEndpointUpdatedTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.

---

##### `failureFeedbackRoleArn`<sup>Optional</sup> <a name="failureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn"></a>

```typescript
public readonly failureFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platformPrincipal`<sup>Optional</sup> <a name="platformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal"></a>

```typescript
public readonly platformPrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}.

---

##### `successFeedbackRoleArn`<sup>Optional</sup> <a name="successFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn"></a>

```typescript
public readonly successFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.

---

##### `successFeedbackSampleRate`<sup>Optional</sup> <a name="successFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate"></a>

```typescript
public readonly successFeedbackSampleRate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.

---



