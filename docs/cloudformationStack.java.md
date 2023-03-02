# `cloudformationStack` Submodule <a name="`cloudformationStack` Submodule" id="@cdktf/provider-aws.cloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStack <a name="CloudformationStack" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack aws_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack.CloudformationStack;

CloudformationStack.Builder.create(Construct scope, java.lang.String id)
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
//  .capabilities(java.util.List<java.lang.String>)
//  .disableRollback(java.lang.Boolean)
//  .disableRollback(IResolvable)
//  .iamRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .notificationArns(java.util.List<java.lang.String>)
//  .onFailure(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .policyBody(java.lang.String)
//  .policyUrl(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
//  .timeoutInMinutes(java.lang.Number)
//  .timeouts(CloudformationStackTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#name CloudformationStack#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#capabilities CloudformationStack#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.disableRollback">disableRollback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#iam_role_arn CloudformationStack#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#id CloudformationStack#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#notification_arns CloudformationStack#notification_arns}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.onFailure">onFailure</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#on_failure CloudformationStack#on_failure}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#parameters CloudformationStack#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.policyBody">policyBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_body CloudformationStack#policy_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.policyUrl">policyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_url CloudformationStack#policy_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags CloudformationStack#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags_all CloudformationStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_body CloudformationStack#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_url CloudformationStack#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#name CloudformationStack#name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#capabilities CloudformationStack#capabilities}.

---

##### `disableRollback`<sup>Optional</sup> <a name="disableRollback" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.disableRollback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#iam_role_arn CloudformationStack#iam_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#id CloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.notificationArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#notification_arns CloudformationStack#notification_arns}.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.onFailure"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#on_failure CloudformationStack#on_failure}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#parameters CloudformationStack#parameters}.

---

##### `policyBody`<sup>Optional</sup> <a name="policyBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.policyBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_body CloudformationStack#policy_body}.

---

##### `policyUrl`<sup>Optional</sup> <a name="policyUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.policyUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_url CloudformationStack#policy_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags CloudformationStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags_all CloudformationStack#tags_all}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_body CloudformationStack#template_body}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.templateUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_url CloudformationStack#template_url}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.timeoutInMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeouts CloudformationStack#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetDisableRollback">resetDisableRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetNotificationArns">resetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyBody">resetPolicyBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyUrl">resetPolicyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.putTimeouts"></a>

```java
public void putTimeouts(CloudformationStackTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a>

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetDisableRollback` <a name="resetDisableRollback" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetDisableRollback"></a>

```java
public void resetDisableRollback()
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetId"></a>

```java
public void resetId()
```

##### `resetNotificationArns` <a name="resetNotificationArns" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetNotificationArns"></a>

```java
public void resetNotificationArns()
```

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOnFailure"></a>

```java
public void resetOnFailure()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPolicyBody` <a name="resetPolicyBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyBody"></a>

```java
public void resetPolicyBody()
```

##### `resetPolicyUrl` <a name="resetPolicyUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyUrl"></a>

```java
public void resetPolicyUrl()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateBody"></a>

```java
public void resetTemplateBody()
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateUrl"></a>

```java
public void resetTemplateUrl()
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeoutInMinutes"></a>

```java
public void resetTimeoutInMinutes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack.CloudformationStack;

CloudformationStack.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack.CloudformationStack;

CloudformationStack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack.CloudformationStack;

CloudformationStack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.outputs">outputs</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference">CloudformationStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollbackInput">disableRollbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArnsInput">notificationArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailureInput">onFailureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBodyInput">policyBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrlInput">policyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrlInput">templateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollback">disableRollback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailure">onFailure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBody">policyBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrl">policyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.outputs"></a>

```java
public StringMap getOutputs();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeouts"></a>

```java
public CloudformationStackTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference">CloudformationStackTimeoutsOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableRollbackInput`<sup>Optional</sup> <a name="disableRollbackInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollbackInput"></a>

```java
public java.lang.Object getDisableRollbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationArnsInput`<sup>Optional</sup> <a name="notificationArnsInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArnsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailureInput"></a>

```java
public java.lang.String getOnFailureInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `policyBodyInput`<sup>Optional</sup> <a name="policyBodyInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBodyInput"></a>

```java
public java.lang.String getPolicyBodyInput();
```

- *Type:* java.lang.String

---

##### `policyUrlInput`<sup>Optional</sup> <a name="policyUrlInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrlInput"></a>

```java
public java.lang.String getPolicyUrlInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrlInput"></a>

```java
public java.lang.String getTemplateUrlInput();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput"></a>

```java
public java.lang.Number getTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableRollback`<sup>Required</sup> <a name="disableRollback" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollback"></a>

```java
public java.lang.Object getDisableRollback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArns"></a>

```java
public java.util.List<java.lang.String> getNotificationArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailure"></a>

```java
public java.lang.String getOnFailure();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `policyBody`<sup>Required</sup> <a name="policyBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBody"></a>

```java
public java.lang.String getPolicyBody();
```

- *Type:* java.lang.String

---

##### `policyUrl`<sup>Required</sup> <a name="policyUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrl"></a>

```java
public java.lang.String getPolicyUrl();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackConfig <a name="CloudformationStackConfig" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack.CloudformationStackConfig;

CloudformationStackConfig.builder()
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
//  .capabilities(java.util.List<java.lang.String>)
//  .disableRollback(java.lang.Boolean)
//  .disableRollback(IResolvable)
//  .iamRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .notificationArns(java.util.List<java.lang.String>)
//  .onFailure(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .policyBody(java.lang.String)
//  .policyUrl(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
//  .timeoutInMinutes(java.lang.Number)
//  .timeouts(CloudformationStackTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#name CloudformationStack#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#capabilities CloudformationStack#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.disableRollback">disableRollback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#iam_role_arn CloudformationStack#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#id CloudformationStack#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#notification_arns CloudformationStack#notification_arns}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.onFailure">onFailure</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#on_failure CloudformationStack#on_failure}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#parameters CloudformationStack#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyBody">policyBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_body CloudformationStack#policy_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyUrl">policyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_url CloudformationStack#policy_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags CloudformationStack#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags_all CloudformationStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_body CloudformationStack#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_url CloudformationStack#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#name CloudformationStack#name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#capabilities CloudformationStack#capabilities}.

---

##### `disableRollback`<sup>Optional</sup> <a name="disableRollback" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.disableRollback"></a>

```java
public java.lang.Object getDisableRollback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#iam_role_arn CloudformationStack#iam_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#id CloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.notificationArns"></a>

```java
public java.util.List<java.lang.String> getNotificationArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#notification_arns CloudformationStack#notification_arns}.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.onFailure"></a>

```java
public java.lang.String getOnFailure();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#on_failure CloudformationStack#on_failure}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#parameters CloudformationStack#parameters}.

---

##### `policyBody`<sup>Optional</sup> <a name="policyBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyBody"></a>

```java
public java.lang.String getPolicyBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_body CloudformationStack#policy_body}.

---

##### `policyUrl`<sup>Optional</sup> <a name="policyUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyUrl"></a>

```java
public java.lang.String getPolicyUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_url CloudformationStack#policy_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags CloudformationStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags_all CloudformationStack#tags_all}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_body CloudformationStack#template_body}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_url CloudformationStack#template_url}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeouts"></a>

```java
public CloudformationStackTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeouts CloudformationStack#timeouts}

---

### CloudformationStackTimeouts <a name="CloudformationStackTimeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack.CloudformationStackTimeouts;

CloudformationStackTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#create CloudformationStack#create}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#delete CloudformationStack#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#update CloudformationStack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#create CloudformationStack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#delete CloudformationStack#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#update CloudformationStack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackTimeoutsOutputReference <a name="CloudformationStackTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack.CloudformationStackTimeoutsOutputReference;

new CloudformationStackTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



