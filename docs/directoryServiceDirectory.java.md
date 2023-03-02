# `directoryServiceDirectory` Submodule <a name="`directoryServiceDirectory` Submodule" id="@cdktf/provider-aws.directoryServiceDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceDirectory <a name="DirectoryServiceDirectory" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory aws_directory_service_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.Builder.create(Construct scope, java.lang.String id)
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
    .password(java.lang.String)
//  .alias(java.lang.String)
//  .connectSettings(DirectoryServiceDirectoryConnectSettings)
//  .description(java.lang.String)
//  .desiredNumberOfDomainControllers(java.lang.Number)
//  .edition(java.lang.String)
//  .enableSso(java.lang.Boolean)
//  .enableSso(IResolvable)
//  .id(java.lang.String)
//  .shortName(java.lang.String)
//  .size(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DirectoryServiceDirectoryTimeouts)
//  .type(java.lang.String)
//  .vpcSettings(DirectoryServiceDirectoryVpcSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connectSettings">connectSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableSso">enableSso</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `connectSettings`<sup>Optional</sup> <a name="connectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connectSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `desiredNumberOfDomainControllers`<sup>Optional</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.desiredNumberOfDomainControllers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableSso"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `vpcSettings`<sup>Optional</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings">putConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings">resetConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers">resetDesiredNumberOfDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso">resetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings">resetVpcSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConnectSettings` <a name="putConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings"></a>

```java
public void putConnectSettings(DirectoryServiceDirectoryConnectSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts"></a>

```java
public void putTimeouts(DirectoryServiceDirectoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings"></a>

```java
public void putVpcSettings(DirectoryServiceDirectoryVpcSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetConnectSettings` <a name="resetConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings"></a>

```java
public void resetConnectSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredNumberOfDomainControllers` <a name="resetDesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers"></a>

```java
public void resetDesiredNumberOfDomainControllers()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetEnableSso` <a name="resetEnableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso"></a>

```java
public void resetEnableSso()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId"></a>

```java
public void resetId()
```

##### `resetShortName` <a name="resetShortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName"></a>

```java
public void resetShortName()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize"></a>

```java
public void resetSize()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType"></a>

```java
public void resetType()
```

##### `resetVpcSettings` <a name="resetVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings"></a>

```java
public void resetVpcSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectory;

DirectoryServiceDirectory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl">accessUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings">connectSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput">connectSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput">desiredNumberOfDomainControllersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput">enableSsoInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl"></a>

```java
public java.lang.String getAccessUrl();
```

- *Type:* java.lang.String

---

##### `connectSettings`<sup>Required</sup> <a name="connectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings"></a>

```java
public DirectoryServiceDirectoryConnectSettingsOutputReference getConnectSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a>

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts"></a>

```java
public DirectoryServiceDirectoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a>

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings"></a>

```java
public DirectoryServiceDirectoryVpcSettingsOutputReference getVpcSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `connectSettingsInput`<sup>Optional</sup> <a name="connectSettingsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput"></a>

```java
public DirectoryServiceDirectoryConnectSettings getConnectSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredNumberOfDomainControllersInput`<sup>Optional</sup> <a name="desiredNumberOfDomainControllersInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllersInput();
```

- *Type:* java.lang.Number

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `enableSsoInput`<sup>Optional</sup> <a name="enableSsoInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput"></a>

```java
public java.lang.Object getEnableSsoInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput"></a>

```java
public DirectoryServiceDirectoryVpcSettings getVpcSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredNumberOfDomainControllers`<sup>Required</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllers();
```

- *Type:* java.lang.Number

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso"></a>

```java
public java.lang.Object getEnableSso();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceDirectoryConfig <a name="DirectoryServiceDirectoryConfig" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectoryConfig;

DirectoryServiceDirectoryConfig.builder()
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
    .password(java.lang.String)
//  .alias(java.lang.String)
//  .connectSettings(DirectoryServiceDirectoryConnectSettings)
//  .description(java.lang.String)
//  .desiredNumberOfDomainControllers(java.lang.Number)
//  .edition(java.lang.String)
//  .enableSso(java.lang.Boolean)
//  .enableSso(IResolvable)
//  .id(java.lang.String)
//  .shortName(java.lang.String)
//  .size(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DirectoryServiceDirectoryTimeouts)
//  .type(java.lang.String)
//  .vpcSettings(DirectoryServiceDirectoryVpcSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings">connectSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `connectSettings`<sup>Optional</sup> <a name="connectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings"></a>

```java
public DirectoryServiceDirectoryConnectSettings getConnectSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `desiredNumberOfDomainControllers`<sup>Optional</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso"></a>

```java
public java.lang.Object getEnableSso();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts"></a>

```java
public DirectoryServiceDirectoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `vpcSettings`<sup>Optional</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings"></a>

```java
public DirectoryServiceDirectoryVpcSettings getVpcSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

### DirectoryServiceDirectoryConnectSettings <a name="DirectoryServiceDirectoryConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectoryConnectSettings;

DirectoryServiceDirectoryConnectSettings.builder()
    .customerDnsIps(java.util.List<java.lang.String>)
    .customerUsername(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps">customerDnsIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername">customerUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `customerDnsIps`<sup>Required</sup> <a name="customerDnsIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps"></a>

```java
public java.util.List<java.lang.String> getCustomerDnsIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}.

---

##### `customerUsername`<sup>Required</sup> <a name="customerUsername" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername"></a>

```java
public java.lang.String getCustomerUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

### DirectoryServiceDirectoryTimeouts <a name="DirectoryServiceDirectoryTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectoryTimeouts;

DirectoryServiceDirectoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}.

---

### DirectoryServiceDirectoryVpcSettings <a name="DirectoryServiceDirectoryVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectoryVpcSettings;

DirectoryServiceDirectoryVpcSettings.builder()
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceDirectoryConnectSettingsOutputReference <a name="DirectoryServiceDirectoryConnectSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectoryConnectSettingsOutputReference;

new DirectoryServiceDirectoryConnectSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps">connectIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput">customerDnsIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput">customerUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps">customerDnsIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername">customerUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectIps`<sup>Required</sup> <a name="connectIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps"></a>

```java
public java.util.List<java.lang.String> getConnectIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerDnsIpsInput`<sup>Optional</sup> <a name="customerDnsIpsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput"></a>

```java
public java.util.List<java.lang.String> getCustomerDnsIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerUsernameInput`<sup>Optional</sup> <a name="customerUsernameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput"></a>

```java
public java.lang.String getCustomerUsernameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `customerDnsIps`<sup>Required</sup> <a name="customerDnsIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps"></a>

```java
public java.util.List<java.lang.String> getCustomerDnsIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerUsername`<sup>Required</sup> <a name="customerUsername" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername"></a>

```java
public java.lang.String getCustomerUsername();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue"></a>

```java
public DirectoryServiceDirectoryConnectSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---


### DirectoryServiceDirectoryTimeoutsOutputReference <a name="DirectoryServiceDirectoryTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectoryTimeoutsOutputReference;

new DirectoryServiceDirectoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### DirectoryServiceDirectoryVpcSettingsOutputReference <a name="DirectoryServiceDirectoryVpcSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_directory.DirectoryServiceDirectoryVpcSettingsOutputReference;

new DirectoryServiceDirectoryVpcSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue"></a>

```java
public DirectoryServiceDirectoryVpcSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---



