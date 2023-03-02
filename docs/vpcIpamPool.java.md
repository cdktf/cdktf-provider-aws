# `vpcIpamPool` Submodule <a name="`vpcIpamPool` Submodule" id="@cdktf/provider-aws.vpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPool <a name="VpcIpamPool" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipam_pool.VpcIpamPool;

VpcIpamPool.Builder.create(Construct scope, java.lang.String id)
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
    .addressFamily(java.lang.String)
    .ipamScopeId(java.lang.String)
//  .allocationDefaultNetmaskLength(java.lang.Number)
//  .allocationMaxNetmaskLength(java.lang.Number)
//  .allocationMinNetmaskLength(java.lang.Number)
//  .allocationResourceTags(java.util.Map<java.lang.String, java.lang.String>)
//  .autoImport(java.lang.Boolean)
//  .autoImport(IResolvable)
//  .awsService(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locale(java.lang.String)
//  .publicIpSource(java.lang.String)
//  .publiclyAdvertisable(java.lang.Boolean)
//  .publiclyAdvertisable(IResolvable)
//  .sourceIpamPoolId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcIpamPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.ipamScopeId">ipamScopeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationResourceTags">allocationResourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.autoImport">autoImport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.awsService">awsService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publicIpSource">publicIpSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.addressFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.ipamScopeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationDefaultNetmaskLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMaxNetmaskLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMinNetmaskLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationResourceTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.autoImport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.awsService"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `publicIpSource`<sup>Optional</sup> <a name="publicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publicIpSource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}.

---

##### `publiclyAdvertisable`<sup>Optional</sup> <a name="publiclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publiclyAdvertisable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.sourceIpamPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength">resetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength">resetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength">resetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags">resetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport">resetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService">resetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource">resetPublicIpSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable">resetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId">resetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts"></a>

```java
public void putTimeouts(VpcIpamPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

---

##### `resetAllocationDefaultNetmaskLength` <a name="resetAllocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength"></a>

```java
public void resetAllocationDefaultNetmaskLength()
```

##### `resetAllocationMaxNetmaskLength` <a name="resetAllocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength"></a>

```java
public void resetAllocationMaxNetmaskLength()
```

##### `resetAllocationMinNetmaskLength` <a name="resetAllocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength"></a>

```java
public void resetAllocationMinNetmaskLength()
```

##### `resetAllocationResourceTags` <a name="resetAllocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags"></a>

```java
public void resetAllocationResourceTags()
```

##### `resetAutoImport` <a name="resetAutoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport"></a>

```java
public void resetAutoImport()
```

##### `resetAwsService` <a name="resetAwsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService"></a>

```java
public void resetAwsService()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId"></a>

```java
public void resetId()
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale"></a>

```java
public void resetLocale()
```

##### `resetPublicIpSource` <a name="resetPublicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource"></a>

```java
public void resetPublicIpSource()
```

##### `resetPubliclyAdvertisable` <a name="resetPubliclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable"></a>

```java
public void resetPubliclyAdvertisable()
```

##### `resetSourceIpamPoolId` <a name="resetSourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId"></a>

```java
public void resetSourceIpamPoolId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipam_pool.VpcIpamPool;

VpcIpamPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipam_pool.VpcIpamPool;

VpcIpamPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipam_pool.VpcIpamPool;

VpcIpamPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth">poolDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput">allocationDefaultNetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput">allocationMaxNetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput">allocationMinNetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput">allocationResourceTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput">autoImportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput">awsServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput">ipamScopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput">publicIpSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput">publiclyAdvertisableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput">sourceIpamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags">allocationResourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport">autoImport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService">awsService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId">ipamScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource">publicIpSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType"></a>

```java
public java.lang.String getIpamScopeType();
```

- *Type:* java.lang.String

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth"></a>

```java
public java.lang.Number getPoolDepth();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts"></a>

```java
public VpcIpamPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `allocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="allocationDefaultNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```java
public java.lang.Number getAllocationDefaultNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `allocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMaxNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput"></a>

```java
public java.lang.Number getAllocationMaxNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `allocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMinNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput"></a>

```java
public java.lang.Number getAllocationMinNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `allocationResourceTagsInput`<sup>Optional</sup> <a name="allocationResourceTagsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocationResourceTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoImportInput`<sup>Optional</sup> <a name="autoImportInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput"></a>

```java
public java.lang.Object getAutoImportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `awsServiceInput`<sup>Optional</sup> <a name="awsServiceInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput"></a>

```java
public java.lang.String getAwsServiceInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipamScopeIdInput`<sup>Optional</sup> <a name="ipamScopeIdInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput"></a>

```java
public java.lang.String getIpamScopeIdInput();
```

- *Type:* java.lang.String

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `publicIpSourceInput`<sup>Optional</sup> <a name="publicIpSourceInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput"></a>

```java
public java.lang.String getPublicIpSourceInput();
```

- *Type:* java.lang.String

---

##### `publiclyAdvertisableInput`<sup>Optional</sup> <a name="publiclyAdvertisableInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput"></a>

```java
public java.lang.Object getPubliclyAdvertisableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceIpamPoolIdInput`<sup>Optional</sup> <a name="sourceIpamPoolIdInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput"></a>

```java
public java.lang.String getSourceIpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `allocationDefaultNetmaskLength`<sup>Required</sup> <a name="allocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```java
public java.lang.Number getAllocationDefaultNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `allocationMaxNetmaskLength`<sup>Required</sup> <a name="allocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength"></a>

```java
public java.lang.Number getAllocationMaxNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `allocationMinNetmaskLength`<sup>Required</sup> <a name="allocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength"></a>

```java
public java.lang.Number getAllocationMinNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `allocationResourceTags`<sup>Required</sup> <a name="allocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocationResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoImport`<sup>Required</sup> <a name="autoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport"></a>

```java
public java.lang.Object getAutoImport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService"></a>

```java
public java.lang.String getAwsService();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId"></a>

```java
public java.lang.String getIpamScopeId();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `publicIpSource`<sup>Required</sup> <a name="publicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource"></a>

```java
public java.lang.String getPublicIpSource();
```

- *Type:* java.lang.String

---

##### `publiclyAdvertisable`<sup>Required</sup> <a name="publiclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable"></a>

```java
public java.lang.Object getPubliclyAdvertisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceIpamPoolId`<sup>Required</sup> <a name="sourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId"></a>

```java
public java.lang.String getSourceIpamPoolId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolConfig <a name="VpcIpamPoolConfig" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipam_pool.VpcIpamPoolConfig;

VpcIpamPoolConfig.builder()
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
    .addressFamily(java.lang.String)
    .ipamScopeId(java.lang.String)
//  .allocationDefaultNetmaskLength(java.lang.Number)
//  .allocationMaxNetmaskLength(java.lang.Number)
//  .allocationMinNetmaskLength(java.lang.Number)
//  .allocationResourceTags(java.util.Map<java.lang.String, java.lang.String>)
//  .autoImport(java.lang.Boolean)
//  .autoImport(IResolvable)
//  .awsService(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locale(java.lang.String)
//  .publicIpSource(java.lang.String)
//  .publiclyAdvertisable(java.lang.Boolean)
//  .publiclyAdvertisable(IResolvable)
//  .sourceIpamPoolId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcIpamPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId">ipamScopeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags">allocationResourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport">autoImport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService">awsService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource">publicIpSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId"></a>

```java
public java.lang.String getIpamScopeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```java
public java.lang.Number getAllocationDefaultNetmaskLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```java
public java.lang.Number getAllocationMaxNetmaskLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength"></a>

```java
public java.lang.Number getAllocationMinNetmaskLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocationResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport"></a>

```java
public java.lang.Object getAutoImport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService"></a>

```java
public java.lang.String getAwsService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `publicIpSource`<sup>Optional</sup> <a name="publicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource"></a>

```java
public java.lang.String getPublicIpSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}.

---

##### `publiclyAdvertisable`<sup>Optional</sup> <a name="publiclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable"></a>

```java
public java.lang.Object getPubliclyAdvertisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId"></a>

```java
public java.lang.String getSourceIpamPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts"></a>

```java
public VpcIpamPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}

---

### VpcIpamPoolTimeouts <a name="VpcIpamPoolTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipam_pool.VpcIpamPoolTimeouts;

VpcIpamPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolTimeoutsOutputReference <a name="VpcIpamPoolTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_ipam_pool.VpcIpamPoolTimeoutsOutputReference;

new VpcIpamPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



