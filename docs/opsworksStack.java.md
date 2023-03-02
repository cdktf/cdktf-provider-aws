# `opsworksStack` Submodule <a name="`opsworksStack` Submodule" id="@cdktf/provider-aws.opsworksStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStack <a name="OpsworksStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack aws_opsworks_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStack;

OpsworksStack.Builder.create(Construct scope, java.lang.String id)
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
    .defaultInstanceProfileArn(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
    .serviceRoleArn(java.lang.String)
//  .agentVersion(java.lang.String)
//  .berkshelfVersion(java.lang.String)
//  .color(java.lang.String)
//  .configurationManagerName(java.lang.String)
//  .configurationManagerVersion(java.lang.String)
//  .customCookbooksSource(OpsworksStackCustomCookbooksSource)
//  .customJson(java.lang.String)
//  .defaultAvailabilityZone(java.lang.String)
//  .defaultOs(java.lang.String)
//  .defaultRootDeviceType(java.lang.String)
//  .defaultSshKeyName(java.lang.String)
//  .defaultSubnetId(java.lang.String)
//  .hostnameTheme(java.lang.String)
//  .id(java.lang.String)
//  .manageBerkshelf(java.lang.Boolean)
//  .manageBerkshelf(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpsworksStackTimeouts)
//  .useCustomCookbooks(java.lang.Boolean)
//  .useCustomCookbooks(IResolvable)
//  .useOpsworksSecurityGroups(java.lang.Boolean)
//  .useOpsworksSecurityGroups(IResolvable)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultInstanceProfileArn">defaultInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.berkshelfVersion">berkshelfVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.color">color</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerName">configurationManagerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerVersion">configurationManagerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customCookbooksSource">customCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultAvailabilityZone">defaultAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultOs">defaultOs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultRootDeviceType">defaultRootDeviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSshKeyName">defaultSshKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSubnetId">defaultSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.hostnameTheme">hostnameTheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.manageBerkshelf">manageBerkshelf</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useCustomCookbooks">useCustomCookbooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useOpsworksSecurityGroups">useOpsworksSecurityGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="defaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultInstanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.serviceRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.agentVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `berkshelfVersion`<sup>Optional</sup> <a name="berkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.berkshelfVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.color"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}.

---

##### `configurationManagerName`<sup>Optional</sup> <a name="configurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `configurationManagerVersion`<sup>Optional</sup> <a name="configurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="customCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customCookbooksSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="defaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultAvailabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `defaultOs`<sup>Optional</sup> <a name="defaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultOs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="defaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultRootDeviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="defaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSshKeyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="defaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `hostnameTheme`<sup>Optional</sup> <a name="hostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.hostnameTheme"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manageBerkshelf`<sup>Optional</sup> <a name="manageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.manageBerkshelf"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="useCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useCustomCookbooks"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="useOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useOpsworksSecurityGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource">putCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion">resetBerkshelfVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor">resetColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName">resetConfigurationManagerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion">resetConfigurationManagerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource">resetCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone">resetDefaultAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs">resetDefaultOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType">resetDefaultRootDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName">resetDefaultSshKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId">resetDefaultSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme">resetHostnameTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf">resetManageBerkshelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks">resetUseCustomCookbooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups">resetUseOpsworksSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCustomCookbooksSource` <a name="putCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource"></a>

```java
public void putCustomCookbooksSource(OpsworksStackCustomCookbooksSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts"></a>

```java
public void putTimeouts(OpsworksStackTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion"></a>

```java
public void resetAgentVersion()
```

##### `resetBerkshelfVersion` <a name="resetBerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion"></a>

```java
public void resetBerkshelfVersion()
```

##### `resetColor` <a name="resetColor" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor"></a>

```java
public void resetColor()
```

##### `resetConfigurationManagerName` <a name="resetConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName"></a>

```java
public void resetConfigurationManagerName()
```

##### `resetConfigurationManagerVersion` <a name="resetConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion"></a>

```java
public void resetConfigurationManagerVersion()
```

##### `resetCustomCookbooksSource` <a name="resetCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource"></a>

```java
public void resetCustomCookbooksSource()
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson"></a>

```java
public void resetCustomJson()
```

##### `resetDefaultAvailabilityZone` <a name="resetDefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone"></a>

```java
public void resetDefaultAvailabilityZone()
```

##### `resetDefaultOs` <a name="resetDefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs"></a>

```java
public void resetDefaultOs()
```

##### `resetDefaultRootDeviceType` <a name="resetDefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType"></a>

```java
public void resetDefaultRootDeviceType()
```

##### `resetDefaultSshKeyName` <a name="resetDefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName"></a>

```java
public void resetDefaultSshKeyName()
```

##### `resetDefaultSubnetId` <a name="resetDefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId"></a>

```java
public void resetDefaultSubnetId()
```

##### `resetHostnameTheme` <a name="resetHostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme"></a>

```java
public void resetHostnameTheme()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId"></a>

```java
public void resetId()
```

##### `resetManageBerkshelf` <a name="resetManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf"></a>

```java
public void resetManageBerkshelf()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseCustomCookbooks` <a name="resetUseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks"></a>

```java
public void resetUseCustomCookbooks()
```

##### `resetUseOpsworksSecurityGroups` <a name="resetUseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups"></a>

```java
public void resetUseOpsworksSecurityGroups()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStack;

OpsworksStack.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStack;

OpsworksStack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStack;

OpsworksStack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource">customCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint">stackEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput">agentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput">berkshelfVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput">colorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput">configurationManagerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput">configurationManagerVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput">customCookbooksSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput">customJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput">defaultAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput">defaultInstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput">defaultOsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput">defaultRootDeviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput">defaultSshKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput">defaultSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput">hostnameThemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput">manageBerkshelfInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput">useCustomCookbooksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput">useOpsworksSecurityGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion">berkshelfVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color">color</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName">configurationManagerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion">configurationManagerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson">customJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone">defaultAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn">defaultInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs">defaultOs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType">defaultRootDeviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName">defaultSshKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId">defaultSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme">hostnameTheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf">manageBerkshelf</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks">useCustomCookbooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups">useOpsworksSecurityGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `customCookbooksSource`<sup>Required</sup> <a name="customCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource"></a>

```java
public OpsworksStackCustomCookbooksSourceOutputReference getCustomCookbooksSource();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a>

---

##### `stackEndpoint`<sup>Required</sup> <a name="stackEndpoint" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint"></a>

```java
public java.lang.String getStackEndpoint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts"></a>

```java
public OpsworksStackTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a>

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput"></a>

```java
public java.lang.String getAgentVersionInput();
```

- *Type:* java.lang.String

---

##### `berkshelfVersionInput`<sup>Optional</sup> <a name="berkshelfVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput"></a>

```java
public java.lang.String getBerkshelfVersionInput();
```

- *Type:* java.lang.String

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput"></a>

```java
public java.lang.String getColorInput();
```

- *Type:* java.lang.String

---

##### `configurationManagerNameInput`<sup>Optional</sup> <a name="configurationManagerNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput"></a>

```java
public java.lang.String getConfigurationManagerNameInput();
```

- *Type:* java.lang.String

---

##### `configurationManagerVersionInput`<sup>Optional</sup> <a name="configurationManagerVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput"></a>

```java
public java.lang.String getConfigurationManagerVersionInput();
```

- *Type:* java.lang.String

---

##### `customCookbooksSourceInput`<sup>Optional</sup> <a name="customCookbooksSourceInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput"></a>

```java
public OpsworksStackCustomCookbooksSource getCustomCookbooksSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput"></a>

```java
public java.lang.String getCustomJsonInput();
```

- *Type:* java.lang.String

---

##### `defaultAvailabilityZoneInput`<sup>Optional</sup> <a name="defaultAvailabilityZoneInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput"></a>

```java
public java.lang.String getDefaultAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `defaultInstanceProfileArnInput`<sup>Optional</sup> <a name="defaultInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput"></a>

```java
public java.lang.String getDefaultInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `defaultOsInput`<sup>Optional</sup> <a name="defaultOsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput"></a>

```java
public java.lang.String getDefaultOsInput();
```

- *Type:* java.lang.String

---

##### `defaultRootDeviceTypeInput`<sup>Optional</sup> <a name="defaultRootDeviceTypeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput"></a>

```java
public java.lang.String getDefaultRootDeviceTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultSshKeyNameInput`<sup>Optional</sup> <a name="defaultSshKeyNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput"></a>

```java
public java.lang.String getDefaultSshKeyNameInput();
```

- *Type:* java.lang.String

---

##### `defaultSubnetIdInput`<sup>Optional</sup> <a name="defaultSubnetIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput"></a>

```java
public java.lang.String getDefaultSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameThemeInput`<sup>Optional</sup> <a name="hostnameThemeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput"></a>

```java
public java.lang.String getHostnameThemeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `manageBerkshelfInput`<sup>Optional</sup> <a name="manageBerkshelfInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput"></a>

```java
public java.lang.Object getManageBerkshelfInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput"></a>

```java
public java.lang.String getServiceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `useCustomCookbooksInput`<sup>Optional</sup> <a name="useCustomCookbooksInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput"></a>

```java
public java.lang.Object getUseCustomCookbooksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOpsworksSecurityGroupsInput`<sup>Optional</sup> <a name="useOpsworksSecurityGroupsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput"></a>

```java
public java.lang.Object getUseOpsworksSecurityGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `berkshelfVersion`<sup>Required</sup> <a name="berkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion"></a>

```java
public java.lang.String getBerkshelfVersion();
```

- *Type:* java.lang.String

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

---

##### `configurationManagerName`<sup>Required</sup> <a name="configurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName"></a>

```java
public java.lang.String getConfigurationManagerName();
```

- *Type:* java.lang.String

---

##### `configurationManagerVersion`<sup>Required</sup> <a name="configurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion"></a>

```java
public java.lang.String getConfigurationManagerVersion();
```

- *Type:* java.lang.String

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

---

##### `defaultAvailabilityZone`<sup>Required</sup> <a name="defaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone"></a>

```java
public java.lang.String getDefaultAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="defaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn"></a>

```java
public java.lang.String getDefaultInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `defaultOs`<sup>Required</sup> <a name="defaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs"></a>

```java
public java.lang.String getDefaultOs();
```

- *Type:* java.lang.String

---

##### `defaultRootDeviceType`<sup>Required</sup> <a name="defaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType"></a>

```java
public java.lang.String getDefaultRootDeviceType();
```

- *Type:* java.lang.String

---

##### `defaultSshKeyName`<sup>Required</sup> <a name="defaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName"></a>

```java
public java.lang.String getDefaultSshKeyName();
```

- *Type:* java.lang.String

---

##### `defaultSubnetId`<sup>Required</sup> <a name="defaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId"></a>

```java
public java.lang.String getDefaultSubnetId();
```

- *Type:* java.lang.String

---

##### `hostnameTheme`<sup>Required</sup> <a name="hostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme"></a>

```java
public java.lang.String getHostnameTheme();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `manageBerkshelf`<sup>Required</sup> <a name="manageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf"></a>

```java
public java.lang.Object getManageBerkshelf();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useCustomCookbooks`<sup>Required</sup> <a name="useCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks"></a>

```java
public java.lang.Object getUseCustomCookbooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOpsworksSecurityGroups`<sup>Required</sup> <a name="useOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups"></a>

```java
public java.lang.Object getUseOpsworksSecurityGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStackConfig <a name="OpsworksStackConfig" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStackConfig;

OpsworksStackConfig.builder()
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
    .defaultInstanceProfileArn(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
    .serviceRoleArn(java.lang.String)
//  .agentVersion(java.lang.String)
//  .berkshelfVersion(java.lang.String)
//  .color(java.lang.String)
//  .configurationManagerName(java.lang.String)
//  .configurationManagerVersion(java.lang.String)
//  .customCookbooksSource(OpsworksStackCustomCookbooksSource)
//  .customJson(java.lang.String)
//  .defaultAvailabilityZone(java.lang.String)
//  .defaultOs(java.lang.String)
//  .defaultRootDeviceType(java.lang.String)
//  .defaultSshKeyName(java.lang.String)
//  .defaultSubnetId(java.lang.String)
//  .hostnameTheme(java.lang.String)
//  .id(java.lang.String)
//  .manageBerkshelf(java.lang.Boolean)
//  .manageBerkshelf(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpsworksStackTimeouts)
//  .useCustomCookbooks(java.lang.Boolean)
//  .useCustomCookbooks(IResolvable)
//  .useOpsworksSecurityGroups(java.lang.Boolean)
//  .useOpsworksSecurityGroups(IResolvable)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn">defaultInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion">berkshelfVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color">color</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName">configurationManagerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion">configurationManagerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource">customCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone">defaultAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs">defaultOs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType">defaultRootDeviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName">defaultSshKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId">defaultSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme">hostnameTheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf">manageBerkshelf</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks">useCustomCookbooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups">useOpsworksSecurityGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="defaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn"></a>

```java
public java.lang.String getDefaultInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `berkshelfVersion`<sup>Optional</sup> <a name="berkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion"></a>

```java
public java.lang.String getBerkshelfVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}.

---

##### `configurationManagerName`<sup>Optional</sup> <a name="configurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName"></a>

```java
public java.lang.String getConfigurationManagerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `configurationManagerVersion`<sup>Optional</sup> <a name="configurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion"></a>

```java
public java.lang.String getConfigurationManagerVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="customCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource"></a>

```java
public OpsworksStackCustomCookbooksSource getCustomCookbooksSource();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="defaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone"></a>

```java
public java.lang.String getDefaultAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `defaultOs`<sup>Optional</sup> <a name="defaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs"></a>

```java
public java.lang.String getDefaultOs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="defaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType"></a>

```java
public java.lang.String getDefaultRootDeviceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="defaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName"></a>

```java
public java.lang.String getDefaultSshKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="defaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId"></a>

```java
public java.lang.String getDefaultSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `hostnameTheme`<sup>Optional</sup> <a name="hostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme"></a>

```java
public java.lang.String getHostnameTheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manageBerkshelf`<sup>Optional</sup> <a name="manageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf"></a>

```java
public java.lang.Object getManageBerkshelf();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts"></a>

```java
public OpsworksStackTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="useCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks"></a>

```java
public java.lang.Object getUseCustomCookbooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="useOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups"></a>

```java
public java.lang.Object getUseOpsworksSecurityGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

### OpsworksStackCustomCookbooksSource <a name="OpsworksStackCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStackCustomCookbooksSource;

OpsworksStackCustomCookbooksSource.builder()
    .type(java.lang.String)
    .url(java.lang.String)
//  .password(java.lang.String)
//  .revision(java.lang.String)
//  .sshKey(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision">revision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}.

---

### OpsworksStackTimeouts <a name="OpsworksStackTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStackTimeouts;

OpsworksStackTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStackCustomCookbooksSourceOutputReference <a name="OpsworksStackCustomCookbooksSourceOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStackCustomCookbooksSourceOutputReference;

new OpsworksStackCustomCookbooksSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey">resetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetSshKey` <a name="resetSshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey"></a>

```java
public void resetSshKey()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput">sshKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `sshKeyInput`<sup>Optional</sup> <a name="sshKeyInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput"></a>

```java
public java.lang.String getSshKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue"></a>

```java
public OpsworksStackCustomCookbooksSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---


### OpsworksStackTimeoutsOutputReference <a name="OpsworksStackTimeoutsOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_stack.OpsworksStackTimeoutsOutputReference;

new OpsworksStackTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



