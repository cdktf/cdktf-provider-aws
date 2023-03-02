# `appstreamImageBuilder` Submodule <a name="`appstreamImageBuilder` Submodule" id="@cdktf/provider-aws.appstreamImageBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamImageBuilder <a name="AppstreamImageBuilder" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder aws_appstream_image_builder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilder;

AppstreamImageBuilder.Builder.create(Construct scope, java.lang.String id)
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
    .instanceType(java.lang.String)
    .name(java.lang.String)
//  .accessEndpoint(IResolvable)
//  .accessEndpoint(java.util.List<AppstreamImageBuilderAccessEndpoint>)
//  .appstreamAgentVersion(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .domainJoinInfo(AppstreamImageBuilderDomainJoinInfo)
//  .enableDefaultInternetAccess(java.lang.Boolean)
//  .enableDefaultInternetAccess(IResolvable)
//  .iamRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .imageArn(java.lang.String)
//  .imageName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConfig(AppstreamImageBuilderVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.accessEndpoint">accessEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>></code> | access_endpoint block. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.appstreamAgentVersion">appstreamAgentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | domain_join_info block. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#id AppstreamImageBuilder#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageArn">imageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `accessEndpoint`<sup>Optional</sup> <a name="accessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.accessEndpoint"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>>

access_endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#access_endpoint AppstreamImageBuilder#access_endpoint}

---

##### `appstreamAgentVersion`<sup>Optional</sup> <a name="appstreamAgentVersion" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.appstreamAgentVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="domainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.domainJoinInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

domain_join_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="enableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.enableDefaultInternetAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#id AppstreamImageBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageArn`<sup>Optional</sup> <a name="imageArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint">putAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo">putDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoint">resetAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion">resetAppstreamAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo">resetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess">resetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn">resetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccessEndpoint` <a name="putAccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint"></a>

```java
public void putAccessEndpoint(IResolvable OR java.util.List<AppstreamImageBuilderAccessEndpoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>>

---

##### `putDomainJoinInfo` <a name="putDomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo"></a>

```java
public void putDomainJoinInfo(AppstreamImageBuilderDomainJoinInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig"></a>

```java
public void putVpcConfig(AppstreamImageBuilderVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `resetAccessEndpoint` <a name="resetAccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoint"></a>

```java
public void resetAccessEndpoint()
```

##### `resetAppstreamAgentVersion` <a name="resetAppstreamAgentVersion" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion"></a>

```java
public void resetAppstreamAgentVersion()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomainJoinInfo` <a name="resetDomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo"></a>

```java
public void resetDomainJoinInfo()
```

##### `resetEnableDefaultInternetAccess` <a name="resetEnableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess"></a>

```java
public void resetEnableDefaultInternetAccess()
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetId"></a>

```java
public void resetId()
```

##### `resetImageArn` <a name="resetImageArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn"></a>

```java
public void resetImageArn()
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilder;

AppstreamImageBuilder.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilder;

AppstreamImageBuilder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilder;

AppstreamImageBuilder.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoint">accessEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList">AppstreamImageBuilderAccessEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointInput">accessEndpointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput">appstreamAgentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput">domainJoinInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput">enableDefaultInternetAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput">imageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion">appstreamAgentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessEndpoint`<sup>Required</sup> <a name="accessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoint"></a>

```java
public AppstreamImageBuilderAccessEndpointList getAccessEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList">AppstreamImageBuilderAccessEndpointList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `domainJoinInfo`<sup>Required</sup> <a name="domainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo"></a>

```java
public AppstreamImageBuilderDomainJoinInfoOutputReference getDomainJoinInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig"></a>

```java
public AppstreamImageBuilderVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a>

---

##### `accessEndpointInput`<sup>Optional</sup> <a name="accessEndpointInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointInput"></a>

```java
public java.lang.Object getAccessEndpointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>>

---

##### `appstreamAgentVersionInput`<sup>Optional</sup> <a name="appstreamAgentVersionInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput"></a>

```java
public java.lang.String getAppstreamAgentVersionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainJoinInfoInput`<sup>Optional</sup> <a name="domainJoinInfoInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput"></a>

```java
public AppstreamImageBuilderDomainJoinInfo getDomainJoinInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `enableDefaultInternetAccessInput`<sup>Optional</sup> <a name="enableDefaultInternetAccessInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput"></a>

```java
public java.lang.Object getEnableDefaultInternetAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageArnInput`<sup>Optional</sup> <a name="imageArnInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput"></a>

```java
public java.lang.String getImageArnInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput"></a>

```java
public AppstreamImageBuilderVpcConfig getVpcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="appstreamAgentVersion" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion"></a>

```java
public java.lang.String getAppstreamAgentVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="enableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess"></a>

```java
public java.lang.Object getEnableDefaultInternetAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamImageBuilderAccessEndpoint <a name="AppstreamImageBuilderAccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderAccessEndpoint;

AppstreamImageBuilderAccessEndpoint.builder()
    .endpointType(java.lang.String)
//  .vpceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.vpceId">vpceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}. |

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}.

---

##### `vpceId`<sup>Optional</sup> <a name="vpceId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.vpceId"></a>

```java
public java.lang.String getVpceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}.

---

### AppstreamImageBuilderConfig <a name="AppstreamImageBuilderConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderConfig;

AppstreamImageBuilderConfig.builder()
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
    .instanceType(java.lang.String)
    .name(java.lang.String)
//  .accessEndpoint(IResolvable)
//  .accessEndpoint(java.util.List<AppstreamImageBuilderAccessEndpoint>)
//  .appstreamAgentVersion(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .domainJoinInfo(AppstreamImageBuilderDomainJoinInfo)
//  .enableDefaultInternetAccess(java.lang.Boolean)
//  .enableDefaultInternetAccess(IResolvable)
//  .iamRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .imageArn(java.lang.String)
//  .imageName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConfig(AppstreamImageBuilderVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoint">accessEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>></code> | access_endpoint block. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion">appstreamAgentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | domain_join_info block. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#id AppstreamImageBuilder#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `accessEndpoint`<sup>Optional</sup> <a name="accessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoint"></a>

```java
public java.lang.Object getAccessEndpoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>>

access_endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#access_endpoint AppstreamImageBuilder#access_endpoint}

---

##### `appstreamAgentVersion`<sup>Optional</sup> <a name="appstreamAgentVersion" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion"></a>

```java
public java.lang.String getAppstreamAgentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="domainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo"></a>

```java
public AppstreamImageBuilderDomainJoinInfo getDomainJoinInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

domain_join_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="enableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess"></a>

```java
public java.lang.Object getEnableDefaultInternetAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#id AppstreamImageBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageArn`<sup>Optional</sup> <a name="imageArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig"></a>

```java
public AppstreamImageBuilderVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}

---

### AppstreamImageBuilderDomainJoinInfo <a name="AppstreamImageBuilderDomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderDomainJoinInfo;

AppstreamImageBuilderDomainJoinInfo.builder()
//  .directoryName(java.lang.String)
//  .organizationalUnitDistinguishedName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}. |

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}.

---

### AppstreamImageBuilderVpcConfig <a name="AppstreamImageBuilderVpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderVpcConfig;

AppstreamImageBuilderVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamImageBuilderAccessEndpointList <a name="AppstreamImageBuilderAccessEndpointList" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderAccessEndpointList;

new AppstreamImageBuilderAccessEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get"></a>

```java
public AppstreamImageBuilderAccessEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>>

---


### AppstreamImageBuilderAccessEndpointOutputReference <a name="AppstreamImageBuilderAccessEndpointOutputReference" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderAccessEndpointOutputReference;

new AppstreamImageBuilderAccessEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resetVpceId">resetVpceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpceId` <a name="resetVpceId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resetVpceId"></a>

```java
public void resetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceIdInput">vpceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceId">vpceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `vpceIdInput`<sup>Optional</sup> <a name="vpceIdInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceIdInput"></a>

```java
public java.lang.String getVpceIdInput();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `vpceId`<sup>Required</sup> <a name="vpceId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceId"></a>

```java
public java.lang.String getVpceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a> OR com.hashicorp.cdktf.IResolvable

---


### AppstreamImageBuilderDomainJoinInfoOutputReference <a name="AppstreamImageBuilderDomainJoinInfoOutputReference" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderDomainJoinInfoOutputReference;

new AppstreamImageBuilderDomainJoinInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryName` <a name="resetDirectoryName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName"></a>

```java
public void resetDirectoryName()
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```java
public void resetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```java
public java.lang.String getDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedNameInput();
```

- *Type:* java.lang.String

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue"></a>

```java
public AppstreamImageBuilderDomainJoinInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---


### AppstreamImageBuilderVpcConfigOutputReference <a name="AppstreamImageBuilderVpcConfigOutputReference" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_image_builder.AppstreamImageBuilderVpcConfigOutputReference;

new AppstreamImageBuilderVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue"></a>

```java
public AppstreamImageBuilderVpcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---



