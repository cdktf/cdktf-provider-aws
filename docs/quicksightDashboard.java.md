# `quicksightDashboard` Submodule <a name="`quicksightDashboard` Submodule" id="@cdktf/provider-aws.quicksightDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDashboard <a name="QuicksightDashboard" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard aws_quicksight_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboard;

QuicksightDashboard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dashboardId(java.lang.String)
    .name(java.lang.String)
    .versionDescription(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .dashboardPublishOptions(QuicksightDashboardDashboardPublishOptions)
//  .definition(java.lang.Object)
//  .id(java.lang.String)
//  .parameters(QuicksightDashboardParameters)
//  .permissions(IResolvable)
//  .permissions(java.util.List<QuicksightDashboardPermissions>)
//  .sourceEntity(QuicksightDashboardSourceEntity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .themeArn(java.lang.String)
//  .timeouts(QuicksightDashboardTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardPublishOptions">dashboardPublishOptions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | dashboard_publish_options block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.definition">definition</a></code> | <code>java.lang.Object</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.permissions">permissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>></code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.themeArn">themeArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.versionDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}.

---

##### `dashboardPublishOptions`<sup>Optional</sup> <a name="dashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardPublishOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

dashboard_publish_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.definition"></a>

- *Type:* java.lang.Object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#definition QuicksightDashboard#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.permissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}

---

##### `sourceEntity`<sup>Optional</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.sourceEntity"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}.

---

##### `themeArn`<sup>Optional</sup> <a name="themeArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.themeArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#timeouts QuicksightDashboard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions">putDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity">putSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions">resetDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetSourceEntity">resetSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetThemeArn">resetThemeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDashboardPublishOptions` <a name="putDashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions"></a>

```java
public void putDashboardPublishOptions(QuicksightDashboardDashboardPublishOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters"></a>

```java
public void putParameters(QuicksightDashboardParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions"></a>

```java
public void putPermissions(IResolvable OR java.util.List<QuicksightDashboardPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>>

---

##### `putSourceEntity` <a name="putSourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity"></a>

```java
public void putSourceEntity(QuicksightDashboardSourceEntity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts"></a>

```java
public void putTimeouts(QuicksightDashboardTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetDashboardPublishOptions` <a name="resetDashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions"></a>

```java
public void resetDashboardPublishOptions()
```

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetId"></a>

```java
public void resetId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetSourceEntity` <a name="resetSourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetSourceEntity"></a>

```java
public void resetSourceEntity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetThemeArn` <a name="resetThemeArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetThemeArn"></a>

```java
public void resetThemeArn()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightDashboard resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboard;

QuicksightDashboard.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboard;

QuicksightDashboard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboard;

QuicksightDashboard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboard;

QuicksightDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QuicksightDashboard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions">dashboardPublishOptions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definitionInput">definitionInput</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime">lastPublishedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityArn">sourceEntityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference">QuicksightDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionNumber">versionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput">dashboardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput">dashboardPublishOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissionsInput">permissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput">sourceEntityInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArnInput">themeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definition">definition</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArn">themeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `dashboardPublishOptions`<sup>Required</sup> <a name="dashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions"></a>

```java
public QuicksightDashboardDashboardPublishOptionsOutputReference getDashboardPublishOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a>

---

##### `definitionInput`<sup>Required</sup> <a name="definitionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definitionInput"></a>

```java
public java.lang.Object getDefinitionInput();
```

- *Type:* java.lang.Object

---

##### `lastPublishedTime`<sup>Required</sup> <a name="lastPublishedTime" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime"></a>

```java
public java.lang.String getLastPublishedTime();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parameters"></a>

```java
public QuicksightDashboardParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissions"></a>

```java
public QuicksightDashboardPermissionsList getPermissions();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a>

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntity"></a>

```java
public QuicksightDashboardSourceEntityOutputReference getSourceEntity();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a>

---

##### `sourceEntityArn`<sup>Required</sup> <a name="sourceEntityArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityArn"></a>

```java
public java.lang.String getSourceEntityArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeouts"></a>

```java
public QuicksightDashboardTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference">QuicksightDashboardTimeoutsOutputReference</a>

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionNumber"></a>

```java
public java.lang.Number getVersionNumber();
```

- *Type:* java.lang.Number

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `dashboardIdInput`<sup>Optional</sup> <a name="dashboardIdInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput"></a>

```java
public java.lang.String getDashboardIdInput();
```

- *Type:* java.lang.String

---

##### `dashboardPublishOptionsInput`<sup>Optional</sup> <a name="dashboardPublishOptionsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput"></a>

```java
public QuicksightDashboardDashboardPublishOptions getDashboardPublishOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parametersInput"></a>

```java
public QuicksightDashboardParameters getParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissionsInput"></a>

```java
public java.lang.Object getPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>>

---

##### `sourceEntityInput`<sup>Optional</sup> <a name="sourceEntityInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput"></a>

```java
public QuicksightDashboardSourceEntity getSourceEntityInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `themeArnInput`<sup>Optional</sup> <a name="themeArnInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArnInput"></a>

```java
public java.lang.String getThemeArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput"></a>

```java
public java.lang.String getVersionDescriptionInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definition"></a>

```java
public java.lang.Object getDefinition();
```

- *Type:* java.lang.Object

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `themeArn`<sup>Required</sup> <a name="themeArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArn"></a>

```java
public java.lang.String getThemeArn();
```

- *Type:* java.lang.String

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDashboardConfig <a name="QuicksightDashboardConfig" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardConfig;

QuicksightDashboardConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dashboardId(java.lang.String)
    .name(java.lang.String)
    .versionDescription(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .dashboardPublishOptions(QuicksightDashboardDashboardPublishOptions)
//  .definition(java.lang.Object)
//  .id(java.lang.String)
//  .parameters(QuicksightDashboardParameters)
//  .permissions(IResolvable)
//  .permissions(java.util.List<QuicksightDashboardPermissions>)
//  .sourceEntity(QuicksightDashboardSourceEntity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .themeArn(java.lang.String)
//  .timeouts(QuicksightDashboardTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions">dashboardPublishOptions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | dashboard_publish_options block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.definition">definition</a></code> | <code>java.lang.Object</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.permissions">permissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>></code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.themeArn">themeArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}.

---

##### `dashboardPublishOptions`<sup>Optional</sup> <a name="dashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions"></a>

```java
public QuicksightDashboardDashboardPublishOptions getDashboardPublishOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

dashboard_publish_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.definition"></a>

```java
public java.lang.Object getDefinition();
```

- *Type:* java.lang.Object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#definition QuicksightDashboard#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.parameters"></a>

```java
public QuicksightDashboardParameters getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.permissions"></a>

```java
public java.lang.Object getPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}

---

##### `sourceEntity`<sup>Optional</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity"></a>

```java
public QuicksightDashboardSourceEntity getSourceEntity();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}.

---

##### `themeArn`<sup>Optional</sup> <a name="themeArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.themeArn"></a>

```java
public java.lang.String getThemeArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.timeouts"></a>

```java
public QuicksightDashboardTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#timeouts QuicksightDashboard#timeouts}

---

### QuicksightDashboardDashboardPublishOptions <a name="QuicksightDashboardDashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptions;

QuicksightDashboardDashboardPublishOptions.builder()
//  .adHocFilteringOption(QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption)
//  .dataPointDrillUpDownOption(QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption)
//  .dataPointMenuLabelOption(QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption)
//  .dataPointTooltipOption(QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption)
//  .exportToCsvOption(QuicksightDashboardDashboardPublishOptionsExportToCsvOption)
//  .exportWithHiddenFieldsOption(QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption)
//  .sheetControlsOption(QuicksightDashboardDashboardPublishOptionsSheetControlsOption)
//  .sheetLayoutElementMaximizationOption(QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption)
//  .visualAxisSortOption(QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption)
//  .visualMenuOption(QuicksightDashboardDashboardPublishOptionsVisualMenuOption)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption">adHocFilteringOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | ad_hoc_filtering_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointDrillUpDownOption">dataPointDrillUpDownOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | data_point_drill_up_down_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointMenuLabelOption">dataPointMenuLabelOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | data_point_menu_label_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointTooltipOption">dataPointTooltipOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | data_point_tooltip_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption">exportToCsvOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | export_to_csv_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportWithHiddenFieldsOption">exportWithHiddenFieldsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | export_with_hidden_fields_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption">sheetControlsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | sheet_controls_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetLayoutElementMaximizationOption">sheetLayoutElementMaximizationOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | sheet_layout_element_maximization_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualAxisSortOption">visualAxisSortOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | visual_axis_sort_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualMenuOption">visualMenuOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | visual_menu_option block. |

---

##### `adHocFilteringOption`<sup>Optional</sup> <a name="adHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption getAdHocFilteringOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

ad_hoc_filtering_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}

---

##### `dataPointDrillUpDownOption`<sup>Optional</sup> <a name="dataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointDrillUpDownOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption getDataPointDrillUpDownOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

data_point_drill_up_down_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_point_drill_up_down_option QuicksightDashboard#data_point_drill_up_down_option}

---

##### `dataPointMenuLabelOption`<sup>Optional</sup> <a name="dataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointMenuLabelOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption getDataPointMenuLabelOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

data_point_menu_label_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_point_menu_label_option QuicksightDashboard#data_point_menu_label_option}

---

##### `dataPointTooltipOption`<sup>Optional</sup> <a name="dataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointTooltipOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption getDataPointTooltipOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

data_point_tooltip_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_point_tooltip_option QuicksightDashboard#data_point_tooltip_option}

---

##### `exportToCsvOption`<sup>Optional</sup> <a name="exportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportToCsvOption getExportToCsvOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

export_to_csv_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}

---

##### `exportWithHiddenFieldsOption`<sup>Optional</sup> <a name="exportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportWithHiddenFieldsOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption getExportWithHiddenFieldsOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

export_with_hidden_fields_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#export_with_hidden_fields_option QuicksightDashboard#export_with_hidden_fields_option}

---

##### `sheetControlsOption`<sup>Optional</sup> <a name="sheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetControlsOption getSheetControlsOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

sheet_controls_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}

---

##### `sheetLayoutElementMaximizationOption`<sup>Optional</sup> <a name="sheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetLayoutElementMaximizationOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption getSheetLayoutElementMaximizationOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

sheet_layout_element_maximization_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#sheet_layout_element_maximization_option QuicksightDashboard#sheet_layout_element_maximization_option}

---

##### `visualAxisSortOption`<sup>Optional</sup> <a name="visualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualAxisSortOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption getVisualAxisSortOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

visual_axis_sort_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#visual_axis_sort_option QuicksightDashboard#visual_axis_sort_option}

---

##### `visualMenuOption`<sup>Optional</sup> <a name="visualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualMenuOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualMenuOption getVisualMenuOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

visual_menu_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#visual_menu_option QuicksightDashboard#visual_menu_option}

---

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption;

QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption;

QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption;

QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption;

QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportToCsvOption <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption;

QuicksightDashboardDashboardPublishOptionsExportToCsvOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption <a name="QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption;

QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsSheetControlsOption <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption;

QuicksightDashboardDashboardPublishOptionsSheetControlsOption.builder()
//  .visibilityState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState">visibilityState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}. |

---

##### `visibilityState`<sup>Optional</sup> <a name="visibilityState" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState"></a>

```java
public java.lang.String getVisibilityState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}.

---

### QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption <a name="QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption;

QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption <a name="QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption;

QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsVisualMenuOption <a name="QuicksightDashboardDashboardPublishOptionsVisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption;

QuicksightDashboardDashboardPublishOptionsVisualMenuOption.builder()
//  .availabilityStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardParameters <a name="QuicksightDashboardParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParameters;

QuicksightDashboardParameters.builder()
//  .dateTimeParameters(IResolvable)
//  .dateTimeParameters(java.util.List<QuicksightDashboardParametersDateTimeParameters>)
//  .decimalParameters(IResolvable)
//  .decimalParameters(java.util.List<QuicksightDashboardParametersDecimalParameters>)
//  .integerParameters(IResolvable)
//  .integerParameters(java.util.List<QuicksightDashboardParametersIntegerParameters>)
//  .stringParameters(IResolvable)
//  .stringParameters(java.util.List<QuicksightDashboardParametersStringParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters">dateTimeParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>></code> | date_time_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters">decimalParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>></code> | decimal_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters">integerParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>></code> | integer_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters">stringParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>></code> | string_parameters block. |

---

##### `dateTimeParameters`<sup>Optional</sup> <a name="dateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters"></a>

```java
public java.lang.Object getDateTimeParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>>

date_time_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}

---

##### `decimalParameters`<sup>Optional</sup> <a name="decimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters"></a>

```java
public java.lang.Object getDecimalParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>>

decimal_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}

---

##### `integerParameters`<sup>Optional</sup> <a name="integerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters"></a>

```java
public java.lang.Object getIntegerParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>>

integer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}

---

##### `stringParameters`<sup>Optional</sup> <a name="stringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters"></a>

```java
public java.lang.Object getStringParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>>

string_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}

---

### QuicksightDashboardParametersDateTimeParameters <a name="QuicksightDashboardParametersDateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersDateTimeParameters;

QuicksightDashboardParametersDateTimeParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersDecimalParameters <a name="QuicksightDashboardParametersDecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersDecimalParameters;

QuicksightDashboardParametersDecimalParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersIntegerParameters <a name="QuicksightDashboardParametersIntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersIntegerParameters;

QuicksightDashboardParametersIntegerParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersStringParameters <a name="QuicksightDashboardParametersStringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersStringParameters;

QuicksightDashboardParametersStringParameters.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardPermissions <a name="QuicksightDashboardPermissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardPermissions;

QuicksightDashboardPermissions.builder()
    .actions(java.util.List<java.lang.String>)
    .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}.

---

### QuicksightDashboardSourceEntity <a name="QuicksightDashboardSourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardSourceEntity;

QuicksightDashboardSourceEntity.builder()
//  .sourceTemplate(QuicksightDashboardSourceEntitySourceTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | source_template block. |

---

##### `sourceTemplate`<sup>Optional</sup> <a name="sourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate"></a>

```java
public QuicksightDashboardSourceEntitySourceTemplate getSourceTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}

---

### QuicksightDashboardSourceEntitySourceTemplate <a name="QuicksightDashboardSourceEntitySourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardSourceEntitySourceTemplate;

QuicksightDashboardSourceEntitySourceTemplate.builder()
    .arn(java.lang.String)
    .dataSetReferences(IResolvable)
    .dataSetReferences(java.util.List<QuicksightDashboardSourceEntitySourceTemplateDataSetReferences>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences">dataSetReferences</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>></code> | data_set_references block. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}.

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences"></a>

```java
public java.lang.Object getDataSetReferences();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>>

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}

---

### QuicksightDashboardSourceEntitySourceTemplateDataSetReferences <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences;

QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.builder()
    .dataSetArn(java.lang.String)
    .dataSetPlaceholder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}. |

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}.

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}.

---

### QuicksightDashboardTimeouts <a name="QuicksightDashboardTimeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardTimeouts;

QuicksightDashboardTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---


### QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportToCsvOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---


### QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---


### QuicksightDashboardDashboardPublishOptionsOutputReference <a name="QuicksightDashboardDashboardPublishOptionsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsOutputReference;

new QuicksightDashboardDashboardPublishOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption">putAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption">putDataPointDrillUpDownOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption">putDataPointMenuLabelOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption">putDataPointTooltipOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption">putExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption">putExportWithHiddenFieldsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption">putSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption">putSheetLayoutElementMaximizationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption">putVisualAxisSortOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption">putVisualMenuOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption">resetAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointDrillUpDownOption">resetDataPointDrillUpDownOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointMenuLabelOption">resetDataPointMenuLabelOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointTooltipOption">resetDataPointTooltipOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption">resetExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportWithHiddenFieldsOption">resetExportWithHiddenFieldsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption">resetSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetLayoutElementMaximizationOption">resetSheetLayoutElementMaximizationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualAxisSortOption">resetVisualAxisSortOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualMenuOption">resetVisualMenuOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdHocFilteringOption` <a name="putAdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption"></a>

```java
public void putAdHocFilteringOption(QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `putDataPointDrillUpDownOption` <a name="putDataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption"></a>

```java
public void putDataPointDrillUpDownOption(QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---

##### `putDataPointMenuLabelOption` <a name="putDataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption"></a>

```java
public void putDataPointMenuLabelOption(QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---

##### `putDataPointTooltipOption` <a name="putDataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption"></a>

```java
public void putDataPointTooltipOption(QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---

##### `putExportToCsvOption` <a name="putExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption"></a>

```java
public void putExportToCsvOption(QuicksightDashboardDashboardPublishOptionsExportToCsvOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `putExportWithHiddenFieldsOption` <a name="putExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption"></a>

```java
public void putExportWithHiddenFieldsOption(QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---

##### `putSheetControlsOption` <a name="putSheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption"></a>

```java
public void putSheetControlsOption(QuicksightDashboardDashboardPublishOptionsSheetControlsOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `putSheetLayoutElementMaximizationOption` <a name="putSheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption"></a>

```java
public void putSheetLayoutElementMaximizationOption(QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---

##### `putVisualAxisSortOption` <a name="putVisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption"></a>

```java
public void putVisualAxisSortOption(QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---

##### `putVisualMenuOption` <a name="putVisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption"></a>

```java
public void putVisualMenuOption(QuicksightDashboardDashboardPublishOptionsVisualMenuOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---

##### `resetAdHocFilteringOption` <a name="resetAdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption"></a>

```java
public void resetAdHocFilteringOption()
```

##### `resetDataPointDrillUpDownOption` <a name="resetDataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointDrillUpDownOption"></a>

```java
public void resetDataPointDrillUpDownOption()
```

##### `resetDataPointMenuLabelOption` <a name="resetDataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointMenuLabelOption"></a>

```java
public void resetDataPointMenuLabelOption()
```

##### `resetDataPointTooltipOption` <a name="resetDataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointTooltipOption"></a>

```java
public void resetDataPointTooltipOption()
```

##### `resetExportToCsvOption` <a name="resetExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption"></a>

```java
public void resetExportToCsvOption()
```

##### `resetExportWithHiddenFieldsOption` <a name="resetExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportWithHiddenFieldsOption"></a>

```java
public void resetExportWithHiddenFieldsOption()
```

##### `resetSheetControlsOption` <a name="resetSheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption"></a>

```java
public void resetSheetControlsOption()
```

##### `resetSheetLayoutElementMaximizationOption` <a name="resetSheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetLayoutElementMaximizationOption"></a>

```java
public void resetSheetLayoutElementMaximizationOption()
```

##### `resetVisualAxisSortOption` <a name="resetVisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualAxisSortOption"></a>

```java
public void resetVisualAxisSortOption()
```

##### `resetVisualMenuOption` <a name="resetVisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualMenuOption"></a>

```java
public void resetVisualMenuOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption">adHocFilteringOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOption">dataPointDrillUpDownOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOption">dataPointMenuLabelOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOption">dataPointTooltipOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption">exportToCsvOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOption">exportWithHiddenFieldsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption">sheetControlsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOption">sheetLayoutElementMaximizationOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOption">visualAxisSortOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOption">visualMenuOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput">adHocFilteringOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOptionInput">dataPointDrillUpDownOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOptionInput">dataPointMenuLabelOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOptionInput">dataPointTooltipOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput">exportToCsvOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOptionInput">exportWithHiddenFieldsOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput">sheetControlsOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOptionInput">sheetLayoutElementMaximizationOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOptionInput">visualAxisSortOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOptionInput">visualMenuOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adHocFilteringOption`<sup>Required</sup> <a name="adHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference getAdHocFilteringOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a>

---

##### `dataPointDrillUpDownOption`<sup>Required</sup> <a name="dataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference getDataPointDrillUpDownOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference</a>

---

##### `dataPointMenuLabelOption`<sup>Required</sup> <a name="dataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference getDataPointMenuLabelOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference</a>

---

##### `dataPointTooltipOption`<sup>Required</sup> <a name="dataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference getDataPointTooltipOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference</a>

---

##### `exportToCsvOption`<sup>Required</sup> <a name="exportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference getExportToCsvOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a>

---

##### `exportWithHiddenFieldsOption`<sup>Required</sup> <a name="exportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference getExportWithHiddenFieldsOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference</a>

---

##### `sheetControlsOption`<sup>Required</sup> <a name="sheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference getSheetControlsOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a>

---

##### `sheetLayoutElementMaximizationOption`<sup>Required</sup> <a name="sheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference getSheetLayoutElementMaximizationOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference</a>

---

##### `visualAxisSortOption`<sup>Required</sup> <a name="visualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference getVisualAxisSortOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference</a>

---

##### `visualMenuOption`<sup>Required</sup> <a name="visualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOption"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference getVisualMenuOption();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference</a>

---

##### `adHocFilteringOptionInput`<sup>Optional</sup> <a name="adHocFilteringOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption getAdHocFilteringOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `dataPointDrillUpDownOptionInput`<sup>Optional</sup> <a name="dataPointDrillUpDownOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption getDataPointDrillUpDownOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---

##### `dataPointMenuLabelOptionInput`<sup>Optional</sup> <a name="dataPointMenuLabelOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption getDataPointMenuLabelOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---

##### `dataPointTooltipOptionInput`<sup>Optional</sup> <a name="dataPointTooltipOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption getDataPointTooltipOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---

##### `exportToCsvOptionInput`<sup>Optional</sup> <a name="exportToCsvOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportToCsvOption getExportToCsvOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `exportWithHiddenFieldsOptionInput`<sup>Optional</sup> <a name="exportWithHiddenFieldsOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption getExportWithHiddenFieldsOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---

##### `sheetControlsOptionInput`<sup>Optional</sup> <a name="sheetControlsOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetControlsOption getSheetControlsOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `sheetLayoutElementMaximizationOptionInput`<sup>Optional</sup> <a name="sheetLayoutElementMaximizationOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption getSheetLayoutElementMaximizationOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---

##### `visualAxisSortOptionInput`<sup>Optional</sup> <a name="visualAxisSortOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption getVisualAxisSortOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---

##### `visualMenuOptionInput`<sup>Optional</sup> <a name="visualMenuOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOptionInput"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualMenuOption getVisualMenuOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---


### QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState">resetVisibilityState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVisibilityState` <a name="resetVisibilityState" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState"></a>

```java
public void resetVisibilityState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput">visibilityStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState">visibilityState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `visibilityStateInput`<sup>Optional</sup> <a name="visibilityStateInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput"></a>

```java
public java.lang.String getVisibilityStateInput();
```

- *Type:* java.lang.String

---

##### `visibilityState`<sup>Required</sup> <a name="visibilityState" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState"></a>

```java
public java.lang.String getVisibilityState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetControlsOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---


### QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---


### QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---


### QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference;

new QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardDashboardPublishOptionsVisualMenuOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---


### QuicksightDashboardParametersDateTimeParametersList <a name="QuicksightDashboardParametersDateTimeParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersDateTimeParametersList;

new QuicksightDashboardParametersDateTimeParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get"></a>

```java
public QuicksightDashboardParametersDateTimeParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>>

---


### QuicksightDashboardParametersDateTimeParametersOutputReference <a name="QuicksightDashboardParametersDateTimeParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersDateTimeParametersOutputReference;

new QuicksightDashboardParametersDateTimeParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>

---


### QuicksightDashboardParametersDecimalParametersList <a name="QuicksightDashboardParametersDecimalParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersDecimalParametersList;

new QuicksightDashboardParametersDecimalParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get"></a>

```java
public QuicksightDashboardParametersDecimalParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>>

---


### QuicksightDashboardParametersDecimalParametersOutputReference <a name="QuicksightDashboardParametersDecimalParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersDecimalParametersOutputReference;

new QuicksightDashboardParametersDecimalParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>

---


### QuicksightDashboardParametersIntegerParametersList <a name="QuicksightDashboardParametersIntegerParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersIntegerParametersList;

new QuicksightDashboardParametersIntegerParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get"></a>

```java
public QuicksightDashboardParametersIntegerParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>>

---


### QuicksightDashboardParametersIntegerParametersOutputReference <a name="QuicksightDashboardParametersIntegerParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersIntegerParametersOutputReference;

new QuicksightDashboardParametersIntegerParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>

---


### QuicksightDashboardParametersOutputReference <a name="QuicksightDashboardParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersOutputReference;

new QuicksightDashboardParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters">putDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters">putDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters">putIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters">putStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters">resetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters">resetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters">resetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters">resetStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeParameters` <a name="putDateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters"></a>

```java
public void putDateTimeParameters(IResolvable OR java.util.List<QuicksightDashboardParametersDateTimeParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>>

---

##### `putDecimalParameters` <a name="putDecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters"></a>

```java
public void putDecimalParameters(IResolvable OR java.util.List<QuicksightDashboardParametersDecimalParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>>

---

##### `putIntegerParameters` <a name="putIntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters"></a>

```java
public void putIntegerParameters(IResolvable OR java.util.List<QuicksightDashboardParametersIntegerParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>>

---

##### `putStringParameters` <a name="putStringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters"></a>

```java
public void putStringParameters(IResolvable OR java.util.List<QuicksightDashboardParametersStringParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>>

---

##### `resetDateTimeParameters` <a name="resetDateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters"></a>

```java
public void resetDateTimeParameters()
```

##### `resetDecimalParameters` <a name="resetDecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters"></a>

```java
public void resetDecimalParameters()
```

##### `resetIntegerParameters` <a name="resetIntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters"></a>

```java
public void resetIntegerParameters()
```

##### `resetStringParameters` <a name="resetStringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters"></a>

```java
public void resetStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters">dateTimeParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters">decimalParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters">integerParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters">stringParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput">dateTimeParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput">decimalParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput">integerParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput">stringParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateTimeParameters`<sup>Required</sup> <a name="dateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters"></a>

```java
public QuicksightDashboardParametersDateTimeParametersList getDateTimeParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a>

---

##### `decimalParameters`<sup>Required</sup> <a name="decimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters"></a>

```java
public QuicksightDashboardParametersDecimalParametersList getDecimalParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a>

---

##### `integerParameters`<sup>Required</sup> <a name="integerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters"></a>

```java
public QuicksightDashboardParametersIntegerParametersList getIntegerParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a>

---

##### `stringParameters`<sup>Required</sup> <a name="stringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters"></a>

```java
public QuicksightDashboardParametersStringParametersList getStringParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a>

---

##### `dateTimeParametersInput`<sup>Optional</sup> <a name="dateTimeParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput"></a>

```java
public java.lang.Object getDateTimeParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>>

---

##### `decimalParametersInput`<sup>Optional</sup> <a name="decimalParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput"></a>

```java
public java.lang.Object getDecimalParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>>

---

##### `integerParametersInput`<sup>Optional</sup> <a name="integerParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput"></a>

```java
public java.lang.Object getIntegerParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>>

---

##### `stringParametersInput`<sup>Optional</sup> <a name="stringParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput"></a>

```java
public java.lang.Object getStringParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---


### QuicksightDashboardParametersStringParametersList <a name="QuicksightDashboardParametersStringParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersStringParametersList;

new QuicksightDashboardParametersStringParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get"></a>

```java
public QuicksightDashboardParametersStringParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>>

---


### QuicksightDashboardParametersStringParametersOutputReference <a name="QuicksightDashboardParametersStringParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardParametersStringParametersOutputReference;

new QuicksightDashboardParametersStringParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>

---


### QuicksightDashboardPermissionsList <a name="QuicksightDashboardPermissionsList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardPermissionsList;

new QuicksightDashboardPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get"></a>

```java
public QuicksightDashboardPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>>

---


### QuicksightDashboardPermissionsOutputReference <a name="QuicksightDashboardPermissionsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardPermissionsOutputReference;

new QuicksightDashboardPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>

---


### QuicksightDashboardSourceEntityOutputReference <a name="QuicksightDashboardSourceEntityOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardSourceEntityOutputReference;

new QuicksightDashboardSourceEntityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate">putSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate">resetSourceTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceTemplate` <a name="putSourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate"></a>

```java
public void putSourceTemplate(QuicksightDashboardSourceEntitySourceTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `resetSourceTemplate` <a name="resetSourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate"></a>

```java
public void resetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput">sourceTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceTemplate`<sup>Required</sup> <a name="sourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate"></a>

```java
public QuicksightDashboardSourceEntitySourceTemplateOutputReference getSourceTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a>

---

##### `sourceTemplateInput`<sup>Optional</sup> <a name="sourceTemplateInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput"></a>

```java
public QuicksightDashboardSourceEntitySourceTemplate getSourceTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardSourceEntity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList;

new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```java
public QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>>

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference;

new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">dataSetPlaceholderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholderInput`<sup>Optional</sup> <a name="dataSetPlaceholderInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```java
public java.lang.String getDataSetPlaceholderInput();
```

- *Type:* java.lang.String

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>

---


### QuicksightDashboardSourceEntitySourceTemplateOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference;

new QuicksightDashboardSourceEntitySourceTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences">putDataSetReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSetReferences` <a name="putDataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```java
public void putDataSetReferences(IResolvable OR java.util.List<QuicksightDashboardSourceEntitySourceTemplateDataSetReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences">dataSetReferences</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">dataSetReferencesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```java
public QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList getDataSetReferences();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetReferencesInput`<sup>Optional</sup> <a name="dataSetReferencesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```java
public java.lang.Object getDataSetReferencesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```java
public QuicksightDashboardSourceEntitySourceTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---


### QuicksightDashboardTimeoutsOutputReference <a name="QuicksightDashboardTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_dashboard.QuicksightDashboardTimeoutsOutputReference;

new QuicksightDashboardTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

---



