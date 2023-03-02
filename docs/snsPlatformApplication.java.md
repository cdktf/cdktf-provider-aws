# `snsPlatformApplication` Submodule <a name="`snsPlatformApplication` Submodule" id="@cdktf/provider-aws.snsPlatformApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsPlatformApplication <a name="SnsPlatformApplication" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application aws_sns_platform_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_platform_application.SnsPlatformApplication;

SnsPlatformApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .platform(java.lang.String)
    .platformCredential(java.lang.String)
//  .applePlatformBundleId(java.lang.String)
//  .applePlatformTeamId(java.lang.String)
//  .eventDeliveryFailureTopicArn(java.lang.String)
//  .eventEndpointCreatedTopicArn(java.lang.String)
//  .eventEndpointDeletedTopicArn(java.lang.String)
//  .eventEndpointUpdatedTopicArn(java.lang.String)
//  .failureFeedbackRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .platformPrincipal(java.lang.String)
//  .successFeedbackRoleArn(java.lang.String)
//  .successFeedbackSampleRate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformCredential">platformCredential</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformBundleId">applePlatformBundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformTeamId">applePlatformTeamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventDeliveryFailureTopicArn">eventDeliveryFailureTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointCreatedTopicArn">eventEndpointCreatedTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointDeletedTopicArn">eventEndpointDeletedTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointUpdatedTopicArn">eventEndpointUpdatedTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformPrincipal">platformPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platform"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}.

---

##### `platformCredential`<sup>Required</sup> <a name="platformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformCredential"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}.

---

##### `applePlatformBundleId`<sup>Optional</sup> <a name="applePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformBundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}.

---

##### `applePlatformTeamId`<sup>Optional</sup> <a name="applePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.applePlatformTeamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}.

---

##### `eventDeliveryFailureTopicArn`<sup>Optional</sup> <a name="eventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventDeliveryFailureTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.

---

##### `eventEndpointCreatedTopicArn`<sup>Optional</sup> <a name="eventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointCreatedTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.

---

##### `eventEndpointDeletedTopicArn`<sup>Optional</sup> <a name="eventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointDeletedTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.

---

##### `eventEndpointUpdatedTopicArn`<sup>Optional</sup> <a name="eventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.eventEndpointUpdatedTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.

---

##### `failureFeedbackRoleArn`<sup>Optional</sup> <a name="failureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.failureFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platformPrincipal`<sup>Optional</sup> <a name="platformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.platformPrincipal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}.

---

##### `successFeedbackRoleArn`<sup>Optional</sup> <a name="successFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.

---

##### `successFeedbackSampleRate`<sup>Optional</sup> <a name="successFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.successFeedbackSampleRate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetApplePlatformBundleId` <a name="resetApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId"></a>

```java
public void resetApplePlatformBundleId()
```

##### `resetApplePlatformTeamId` <a name="resetApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId"></a>

```java
public void resetApplePlatformTeamId()
```

##### `resetEventDeliveryFailureTopicArn` <a name="resetEventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn"></a>

```java
public void resetEventDeliveryFailureTopicArn()
```

##### `resetEventEndpointCreatedTopicArn` <a name="resetEventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn"></a>

```java
public void resetEventEndpointCreatedTopicArn()
```

##### `resetEventEndpointDeletedTopicArn` <a name="resetEventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn"></a>

```java
public void resetEventEndpointDeletedTopicArn()
```

##### `resetEventEndpointUpdatedTopicArn` <a name="resetEventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn"></a>

```java
public void resetEventEndpointUpdatedTopicArn()
```

##### `resetFailureFeedbackRoleArn` <a name="resetFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn"></a>

```java
public void resetFailureFeedbackRoleArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId"></a>

```java
public void resetId()
```

##### `resetPlatformPrincipal` <a name="resetPlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal"></a>

```java
public void resetPlatformPrincipal()
```

##### `resetSuccessFeedbackRoleArn` <a name="resetSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn"></a>

```java
public void resetSuccessFeedbackRoleArn()
```

##### `resetSuccessFeedbackSampleRate` <a name="resetSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate"></a>

```java
public void resetSuccessFeedbackSampleRate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_platform_application.SnsPlatformApplication;

SnsPlatformApplication.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_platform_application.SnsPlatformApplication;

SnsPlatformApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_platform_application.SnsPlatformApplication;

SnsPlatformApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput">applePlatformBundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput">applePlatformTeamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput">eventDeliveryFailureTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput">eventEndpointCreatedTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput">eventEndpointDeletedTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput">eventEndpointUpdatedTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput">failureFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput">platformCredentialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput">platformPrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput">successFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput">successFeedbackSampleRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId">applePlatformBundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId">applePlatformTeamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn">eventDeliveryFailureTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn">eventEndpointCreatedTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn">eventEndpointDeletedTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn">eventEndpointUpdatedTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential">platformCredential</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal">platformPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `applePlatformBundleIdInput`<sup>Optional</sup> <a name="applePlatformBundleIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput"></a>

```java
public java.lang.String getApplePlatformBundleIdInput();
```

- *Type:* java.lang.String

---

##### `applePlatformTeamIdInput`<sup>Optional</sup> <a name="applePlatformTeamIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput"></a>

```java
public java.lang.String getApplePlatformTeamIdInput();
```

- *Type:* java.lang.String

---

##### `eventDeliveryFailureTopicArnInput`<sup>Optional</sup> <a name="eventDeliveryFailureTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput"></a>

```java
public java.lang.String getEventDeliveryFailureTopicArnInput();
```

- *Type:* java.lang.String

---

##### `eventEndpointCreatedTopicArnInput`<sup>Optional</sup> <a name="eventEndpointCreatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput"></a>

```java
public java.lang.String getEventEndpointCreatedTopicArnInput();
```

- *Type:* java.lang.String

---

##### `eventEndpointDeletedTopicArnInput`<sup>Optional</sup> <a name="eventEndpointDeletedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput"></a>

```java
public java.lang.String getEventEndpointDeletedTopicArnInput();
```

- *Type:* java.lang.String

---

##### `eventEndpointUpdatedTopicArnInput`<sup>Optional</sup> <a name="eventEndpointUpdatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput"></a>

```java
public java.lang.String getEventEndpointUpdatedTopicArnInput();
```

- *Type:* java.lang.String

---

##### `failureFeedbackRoleArnInput`<sup>Optional</sup> <a name="failureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput"></a>

```java
public java.lang.String getFailureFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `platformCredentialInput`<sup>Optional</sup> <a name="platformCredentialInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput"></a>

```java
public java.lang.String getPlatformCredentialInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `platformPrincipalInput`<sup>Optional</sup> <a name="platformPrincipalInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput"></a>

```java
public java.lang.String getPlatformPrincipalInput();
```

- *Type:* java.lang.String

---

##### `successFeedbackRoleArnInput`<sup>Optional</sup> <a name="successFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput"></a>

```java
public java.lang.String getSuccessFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `successFeedbackSampleRateInput`<sup>Optional</sup> <a name="successFeedbackSampleRateInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput"></a>

```java
public java.lang.String getSuccessFeedbackSampleRateInput();
```

- *Type:* java.lang.String

---

##### `applePlatformBundleId`<sup>Required</sup> <a name="applePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId"></a>

```java
public java.lang.String getApplePlatformBundleId();
```

- *Type:* java.lang.String

---

##### `applePlatformTeamId`<sup>Required</sup> <a name="applePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId"></a>

```java
public java.lang.String getApplePlatformTeamId();
```

- *Type:* java.lang.String

---

##### `eventDeliveryFailureTopicArn`<sup>Required</sup> <a name="eventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn"></a>

```java
public java.lang.String getEventDeliveryFailureTopicArn();
```

- *Type:* java.lang.String

---

##### `eventEndpointCreatedTopicArn`<sup>Required</sup> <a name="eventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn"></a>

```java
public java.lang.String getEventEndpointCreatedTopicArn();
```

- *Type:* java.lang.String

---

##### `eventEndpointDeletedTopicArn`<sup>Required</sup> <a name="eventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn"></a>

```java
public java.lang.String getEventEndpointDeletedTopicArn();
```

- *Type:* java.lang.String

---

##### `eventEndpointUpdatedTopicArn`<sup>Required</sup> <a name="eventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn"></a>

```java
public java.lang.String getEventEndpointUpdatedTopicArn();
```

- *Type:* java.lang.String

---

##### `failureFeedbackRoleArn`<sup>Required</sup> <a name="failureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn"></a>

```java
public java.lang.String getFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `platformCredential`<sup>Required</sup> <a name="platformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential"></a>

```java
public java.lang.String getPlatformCredential();
```

- *Type:* java.lang.String

---

##### `platformPrincipal`<sup>Required</sup> <a name="platformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal"></a>

```java
public java.lang.String getPlatformPrincipal();
```

- *Type:* java.lang.String

---

##### `successFeedbackRoleArn`<sup>Required</sup> <a name="successFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn"></a>

```java
public java.lang.String getSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `successFeedbackSampleRate`<sup>Required</sup> <a name="successFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate"></a>

```java
public java.lang.String getSuccessFeedbackSampleRate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnsPlatformApplicationConfig <a name="SnsPlatformApplicationConfig" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_platform_application.SnsPlatformApplicationConfig;

SnsPlatformApplicationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .platform(java.lang.String)
    .platformCredential(java.lang.String)
//  .applePlatformBundleId(java.lang.String)
//  .applePlatformTeamId(java.lang.String)
//  .eventDeliveryFailureTopicArn(java.lang.String)
//  .eventEndpointCreatedTopicArn(java.lang.String)
//  .eventEndpointDeletedTopicArn(java.lang.String)
//  .eventEndpointUpdatedTopicArn(java.lang.String)
//  .failureFeedbackRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .platformPrincipal(java.lang.String)
//  .successFeedbackRoleArn(java.lang.String)
//  .successFeedbackSampleRate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential">platformCredential</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId">applePlatformBundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId">applePlatformTeamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn">eventDeliveryFailureTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn">eventEndpointCreatedTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn">eventEndpointDeletedTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn">eventEndpointUpdatedTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal">platformPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}.

---

##### `platformCredential`<sup>Required</sup> <a name="platformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential"></a>

```java
public java.lang.String getPlatformCredential();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}.

---

##### `applePlatformBundleId`<sup>Optional</sup> <a name="applePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId"></a>

```java
public java.lang.String getApplePlatformBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}.

---

##### `applePlatformTeamId`<sup>Optional</sup> <a name="applePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId"></a>

```java
public java.lang.String getApplePlatformTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}.

---

##### `eventDeliveryFailureTopicArn`<sup>Optional</sup> <a name="eventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn"></a>

```java
public java.lang.String getEventDeliveryFailureTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.

---

##### `eventEndpointCreatedTopicArn`<sup>Optional</sup> <a name="eventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn"></a>

```java
public java.lang.String getEventEndpointCreatedTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.

---

##### `eventEndpointDeletedTopicArn`<sup>Optional</sup> <a name="eventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn"></a>

```java
public java.lang.String getEventEndpointDeletedTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.

---

##### `eventEndpointUpdatedTopicArn`<sup>Optional</sup> <a name="eventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn"></a>

```java
public java.lang.String getEventEndpointUpdatedTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.

---

##### `failureFeedbackRoleArn`<sup>Optional</sup> <a name="failureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn"></a>

```java
public java.lang.String getFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platformPrincipal`<sup>Optional</sup> <a name="platformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal"></a>

```java
public java.lang.String getPlatformPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}.

---

##### `successFeedbackRoleArn`<sup>Optional</sup> <a name="successFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn"></a>

```java
public java.lang.String getSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.

---

##### `successFeedbackSampleRate`<sup>Optional</sup> <a name="successFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate"></a>

```java
public java.lang.String getSuccessFeedbackSampleRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.

---



