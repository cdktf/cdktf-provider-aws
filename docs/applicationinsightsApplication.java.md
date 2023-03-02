# `applicationinsightsApplication` Submodule <a name="`applicationinsightsApplication` Submodule" id="@cdktf/provider-aws.applicationinsightsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationinsightsApplication <a name="ApplicationinsightsApplication" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application aws_applicationinsights_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.applicationinsights_application.ApplicationinsightsApplication;

ApplicationinsightsApplication.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .autoConfigEnabled(java.lang.Boolean)
//  .autoConfigEnabled(IResolvable)
//  .autoCreate(java.lang.Boolean)
//  .autoCreate(IResolvable)
//  .cweMonitorEnabled(java.lang.Boolean)
//  .cweMonitorEnabled(IResolvable)
//  .groupingType(java.lang.String)
//  .id(java.lang.String)
//  .opsCenterEnabled(java.lang.Boolean)
//  .opsCenterEnabled(IResolvable)
//  .opsItemSnsTopicArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoConfigEnabled">autoConfigEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoCreate">autoCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.cweMonitorEnabled">cweMonitorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.groupingType">groupingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsCenterEnabled">opsCenterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsItemSnsTopicArn">opsItemSnsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}.

---

##### `autoConfigEnabled`<sup>Optional</sup> <a name="autoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoConfigEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}.

---

##### `autoCreate`<sup>Optional</sup> <a name="autoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}.

---

##### `cweMonitorEnabled`<sup>Optional</sup> <a name="cweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.cweMonitorEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}.

---

##### `groupingType`<sup>Optional</sup> <a name="groupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.groupingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsCenterEnabled`<sup>Optional</sup> <a name="opsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsCenterEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}.

---

##### `opsItemSnsTopicArn`<sup>Optional</sup> <a name="opsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsItemSnsTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled">resetAutoConfigEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate">resetAutoCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled">resetCweMonitorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType">resetGroupingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled">resetOpsCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn">resetOpsItemSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAutoConfigEnabled` <a name="resetAutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled"></a>

```java
public void resetAutoConfigEnabled()
```

##### `resetAutoCreate` <a name="resetAutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate"></a>

```java
public void resetAutoCreate()
```

##### `resetCweMonitorEnabled` <a name="resetCweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled"></a>

```java
public void resetCweMonitorEnabled()
```

##### `resetGroupingType` <a name="resetGroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType"></a>

```java
public void resetGroupingType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId"></a>

```java
public void resetId()
```

##### `resetOpsCenterEnabled` <a name="resetOpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled"></a>

```java
public void resetOpsCenterEnabled()
```

##### `resetOpsItemSnsTopicArn` <a name="resetOpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn"></a>

```java
public void resetOpsItemSnsTopicArn()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.applicationinsights_application.ApplicationinsightsApplication;

ApplicationinsightsApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.applicationinsights_application.ApplicationinsightsApplication;

ApplicationinsightsApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.applicationinsights_application.ApplicationinsightsApplication;

ApplicationinsightsApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput">autoConfigEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput">autoCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput">cweMonitorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput">groupingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput">opsCenterEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput">opsItemSnsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled">autoConfigEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate">autoCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled">cweMonitorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType">groupingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled">opsCenterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn">opsItemSnsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoConfigEnabledInput`<sup>Optional</sup> <a name="autoConfigEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput"></a>

```java
public java.lang.Object getAutoConfigEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoCreateInput`<sup>Optional</sup> <a name="autoCreateInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput"></a>

```java
public java.lang.Object getAutoCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cweMonitorEnabledInput`<sup>Optional</sup> <a name="cweMonitorEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput"></a>

```java
public java.lang.Object getCweMonitorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupingTypeInput`<sup>Optional</sup> <a name="groupingTypeInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput"></a>

```java
public java.lang.String getGroupingTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `opsCenterEnabledInput`<sup>Optional</sup> <a name="opsCenterEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput"></a>

```java
public java.lang.Object getOpsCenterEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `opsItemSnsTopicArnInput`<sup>Optional</sup> <a name="opsItemSnsTopicArnInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput"></a>

```java
public java.lang.String getOpsItemSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoConfigEnabled`<sup>Required</sup> <a name="autoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled"></a>

```java
public java.lang.Object getAutoConfigEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoCreate`<sup>Required</sup> <a name="autoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate"></a>

```java
public java.lang.Object getAutoCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cweMonitorEnabled`<sup>Required</sup> <a name="cweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled"></a>

```java
public java.lang.Object getCweMonitorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupingType`<sup>Required</sup> <a name="groupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType"></a>

```java
public java.lang.String getGroupingType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `opsCenterEnabled`<sup>Required</sup> <a name="opsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled"></a>

```java
public java.lang.Object getOpsCenterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `opsItemSnsTopicArn`<sup>Required</sup> <a name="opsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn"></a>

```java
public java.lang.String getOpsItemSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationinsightsApplicationConfig <a name="ApplicationinsightsApplicationConfig" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.applicationinsights_application.ApplicationinsightsApplicationConfig;

ApplicationinsightsApplicationConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .autoConfigEnabled(java.lang.Boolean)
//  .autoConfigEnabled(IResolvable)
//  .autoCreate(java.lang.Boolean)
//  .autoCreate(IResolvable)
//  .cweMonitorEnabled(java.lang.Boolean)
//  .cweMonitorEnabled(IResolvable)
//  .groupingType(java.lang.String)
//  .id(java.lang.String)
//  .opsCenterEnabled(java.lang.Boolean)
//  .opsCenterEnabled(IResolvable)
//  .opsItemSnsTopicArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled">autoConfigEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate">autoCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled">cweMonitorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType">groupingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled">opsCenterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn">opsItemSnsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}.

---

##### `autoConfigEnabled`<sup>Optional</sup> <a name="autoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled"></a>

```java
public java.lang.Object getAutoConfigEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}.

---

##### `autoCreate`<sup>Optional</sup> <a name="autoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate"></a>

```java
public java.lang.Object getAutoCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}.

---

##### `cweMonitorEnabled`<sup>Optional</sup> <a name="cweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled"></a>

```java
public java.lang.Object getCweMonitorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}.

---

##### `groupingType`<sup>Optional</sup> <a name="groupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType"></a>

```java
public java.lang.String getGroupingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsCenterEnabled`<sup>Optional</sup> <a name="opsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled"></a>

```java
public java.lang.Object getOpsCenterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}.

---

##### `opsItemSnsTopicArn`<sup>Optional</sup> <a name="opsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn"></a>

```java
public java.lang.String getOpsItemSnsTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}.

---



