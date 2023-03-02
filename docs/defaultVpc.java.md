# `defaultVpc` Submodule <a name="`defaultVpc` Submodule" id="@cdktf/provider-aws.defaultVpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpc <a name="DefaultVpc" id="@cdktf/provider-aws.defaultVpc.DefaultVpc"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc aws_default_vpc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_vpc.DefaultVpc;

DefaultVpc.Builder.create(Construct scope, java.lang.String id)
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
//  .assignGeneratedIpv6CidrBlock(java.lang.Boolean)
//  .assignGeneratedIpv6CidrBlock(IResolvable)
//  .enableClassiclink(java.lang.Boolean)
//  .enableClassiclink(IResolvable)
//  .enableClassiclinkDnsSupport(java.lang.Boolean)
//  .enableClassiclinkDnsSupport(IResolvable)
//  .enableDnsHostnames(java.lang.Boolean)
//  .enableDnsHostnames(IResolvable)
//  .enableDnsSupport(java.lang.Boolean)
//  .enableDnsSupport(IResolvable)
//  .enableNetworkAddressUsageMetrics(java.lang.Boolean)
//  .enableNetworkAddressUsageMetrics(IResolvable)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6CidrBlockNetworkBorderGroup(java.lang.String)
//  .ipv6IpamPoolId(java.lang.String)
//  .ipv6NetmaskLength(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.assignGeneratedIpv6CidrBlock">assignGeneratedIpv6CidrBlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclink">enableClassiclink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclinkDnsSupport">enableClassiclinkDnsSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsHostnames">enableDnsHostnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsSupport">enableDnsSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableNetworkAddressUsageMetrics">enableNetworkAddressUsageMetrics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignGeneratedIpv6CidrBlock`<sup>Optional</sup> <a name="assignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.assignGeneratedIpv6CidrBlock"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}.

---

##### `enableClassiclink`<sup>Optional</sup> <a name="enableClassiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclink"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}.

---

##### `enableClassiclinkDnsSupport`<sup>Optional</sup> <a name="enableClassiclinkDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclinkDnsSupport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsHostnames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsSupport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}.

---

##### `enableNetworkAddressUsageMetrics`<sup>Optional</sup> <a name="enableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableNetworkAddressUsageMetrics"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}.

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6IpamPoolId`<sup>Optional</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock">resetAssignGeneratedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclink">resetEnableClassiclink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclinkDnsSupport">resetEnableClassiclinkDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames">resetEnableDnsHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport">resetEnableDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics">resetEnableNetworkAddressUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup">resetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId">resetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength">resetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssignGeneratedIpv6CidrBlock` <a name="resetAssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock"></a>

```java
public void resetAssignGeneratedIpv6CidrBlock()
```

##### `resetEnableClassiclink` <a name="resetEnableClassiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclink"></a>

```java
public void resetEnableClassiclink()
```

##### `resetEnableClassiclinkDnsSupport` <a name="resetEnableClassiclinkDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclinkDnsSupport"></a>

```java
public void resetEnableClassiclinkDnsSupport()
```

##### `resetEnableDnsHostnames` <a name="resetEnableDnsHostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames"></a>

```java
public void resetEnableDnsHostnames()
```

##### `resetEnableDnsSupport` <a name="resetEnableDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport"></a>

```java
public void resetEnableDnsSupport()
```

##### `resetEnableNetworkAddressUsageMetrics` <a name="resetEnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics"></a>

```java
public void resetEnableNetworkAddressUsageMetrics()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetIpv6CidrBlockNetworkBorderGroup` <a name="resetIpv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```java
public void resetIpv6CidrBlockNetworkBorderGroup()
```

##### `resetIpv6IpamPoolId` <a name="resetIpv6IpamPoolId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId"></a>

```java
public void resetIpv6IpamPoolId()
```

##### `resetIpv6NetmaskLength` <a name="resetIpv6NetmaskLength" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength"></a>

```java
public void resetIpv6NetmaskLength()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_vpc.DefaultVpc;

DefaultVpc.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_vpc.DefaultVpc;

DefaultVpc.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_vpc.DefaultVpc;

DefaultVpc.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId">defaultSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId">dhcpOptionsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc">existingDefaultVpc</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy">instanceTenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId">ipv6AssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId">mainRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput">assignGeneratedIpv6CidrBlockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupportInput">enableClassiclinkDnsSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkInput">enableClassiclinkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput">enableDnsHostnamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput">enableDnsSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput">enableNetworkAddressUsageMetricsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput">ipv6IpamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput">ipv6NetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock">assignGeneratedIpv6CidrBlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclink">enableClassiclink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupport">enableClassiclinkDnsSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport">enableDnsSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics">enableNetworkAddressUsageMetrics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId"></a>

```java
public java.lang.String getDefaultNetworkAclId();
```

- *Type:* java.lang.String

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId"></a>

```java
public java.lang.String getDefaultRouteTableId();
```

- *Type:* java.lang.String

---

##### `defaultSecurityGroupId`<sup>Required</sup> <a name="defaultSecurityGroupId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId"></a>

```java
public java.lang.String getDefaultSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `dhcpOptionsId`<sup>Required</sup> <a name="dhcpOptionsId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId"></a>

```java
public java.lang.String getDhcpOptionsId();
```

- *Type:* java.lang.String

---

##### `existingDefaultVpc`<sup>Required</sup> <a name="existingDefaultVpc" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc"></a>

```java
public IResolvable getExistingDefaultVpc();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `instanceTenancy`<sup>Required</sup> <a name="instanceTenancy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy"></a>

```java
public java.lang.String getInstanceTenancy();
```

- *Type:* java.lang.String

---

##### `ipv6AssociationId`<sup>Required</sup> <a name="ipv6AssociationId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId"></a>

```java
public java.lang.String getIpv6AssociationId();
```

- *Type:* java.lang.String

---

##### `mainRouteTableId`<sup>Required</sup> <a name="mainRouteTableId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId"></a>

```java
public java.lang.String getMainRouteTableId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `assignGeneratedIpv6CidrBlockInput`<sup>Optional</sup> <a name="assignGeneratedIpv6CidrBlockInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```java
public java.lang.Object getAssignGeneratedIpv6CidrBlockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableClassiclinkDnsSupportInput`<sup>Optional</sup> <a name="enableClassiclinkDnsSupportInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupportInput"></a>

```java
public java.lang.Object getEnableClassiclinkDnsSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableClassiclinkInput`<sup>Optional</sup> <a name="enableClassiclinkInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkInput"></a>

```java
public java.lang.Object getEnableClassiclinkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDnsHostnamesInput`<sup>Optional</sup> <a name="enableDnsHostnamesInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput"></a>

```java
public java.lang.Object getEnableDnsHostnamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDnsSupportInput`<sup>Optional</sup> <a name="enableDnsSupportInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput"></a>

```java
public java.lang.Object getEnableDnsSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableNetworkAddressUsageMetricsInput`<sup>Optional</sup> <a name="enableNetworkAddressUsageMetricsInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput"></a>

```java
public java.lang.Object getEnableNetworkAddressUsageMetricsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroupInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```java
public java.lang.String getIpv6CidrBlockNetworkBorderGroupInput();
```

- *Type:* java.lang.String

---

##### `ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="ipv6IpamPoolIdInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput"></a>

```java
public java.lang.String getIpv6IpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="ipv6NetmaskLengthInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput"></a>

```java
public java.lang.Number getIpv6NetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `assignGeneratedIpv6CidrBlock`<sup>Required</sup> <a name="assignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock"></a>

```java
public java.lang.Object getAssignGeneratedIpv6CidrBlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableClassiclink`<sup>Required</sup> <a name="enableClassiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclink"></a>

```java
public java.lang.Object getEnableClassiclink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableClassiclinkDnsSupport`<sup>Required</sup> <a name="enableClassiclinkDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupport"></a>

```java
public java.lang.Object getEnableClassiclinkDnsSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDnsHostnames`<sup>Required</sup> <a name="enableDnsHostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames"></a>

```java
public java.lang.Object getEnableDnsHostnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDnsSupport`<sup>Required</sup> <a name="enableDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport"></a>

```java
public java.lang.Object getEnableDnsSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableNetworkAddressUsageMetrics`<sup>Required</sup> <a name="enableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics"></a>

```java
public java.lang.Object getEnableNetworkAddressUsageMetrics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```java
public java.lang.String getIpv6CidrBlockNetworkBorderGroup();
```

- *Type:* java.lang.String

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId"></a>

```java
public java.lang.String getIpv6IpamPoolId();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength"></a>

```java
public java.lang.Number getIpv6NetmaskLength();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcConfig <a name="DefaultVpcConfig" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_vpc.DefaultVpcConfig;

DefaultVpcConfig.builder()
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
//  .assignGeneratedIpv6CidrBlock(java.lang.Boolean)
//  .assignGeneratedIpv6CidrBlock(IResolvable)
//  .enableClassiclink(java.lang.Boolean)
//  .enableClassiclink(IResolvable)
//  .enableClassiclinkDnsSupport(java.lang.Boolean)
//  .enableClassiclinkDnsSupport(IResolvable)
//  .enableDnsHostnames(java.lang.Boolean)
//  .enableDnsHostnames(IResolvable)
//  .enableDnsSupport(java.lang.Boolean)
//  .enableDnsSupport(IResolvable)
//  .enableNetworkAddressUsageMetrics(java.lang.Boolean)
//  .enableNetworkAddressUsageMetrics(IResolvable)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6CidrBlockNetworkBorderGroup(java.lang.String)
//  .ipv6IpamPoolId(java.lang.String)
//  .ipv6NetmaskLength(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock">assignGeneratedIpv6CidrBlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclink">enableClassiclink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclinkDnsSupport">enableClassiclinkDnsSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport">enableDnsSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics">enableNetworkAddressUsageMetrics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignGeneratedIpv6CidrBlock`<sup>Optional</sup> <a name="assignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```java
public java.lang.Object getAssignGeneratedIpv6CidrBlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}.

---

##### `enableClassiclink`<sup>Optional</sup> <a name="enableClassiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclink"></a>

```java
public java.lang.Object getEnableClassiclink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}.

---

##### `enableClassiclinkDnsSupport`<sup>Optional</sup> <a name="enableClassiclinkDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclinkDnsSupport"></a>

```java
public java.lang.Object getEnableClassiclinkDnsSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames"></a>

```java
public java.lang.Object getEnableDnsHostnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport"></a>

```java
public java.lang.Object getEnableDnsSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}.

---

##### `enableNetworkAddressUsageMetrics`<sup>Optional</sup> <a name="enableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```java
public java.lang.Object getEnableNetworkAddressUsageMetrics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}.

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```java
public java.lang.String getIpv6CidrBlockNetworkBorderGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6IpamPoolId`<sup>Optional</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId"></a>

```java
public java.lang.String getIpv6IpamPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength"></a>

```java
public java.lang.Number getIpv6NetmaskLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}.

---



