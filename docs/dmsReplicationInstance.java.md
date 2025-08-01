# `dmsReplicationInstance` Submodule <a name="`dmsReplicationInstance` Submodule" id="@cdktf/provider-aws.dmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationInstance <a name="DmsReplicationInstance" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance aws_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstance;

DmsReplicationInstance.Builder.create(Construct scope, java.lang.String id)
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
    .replicationInstanceClass(java.lang.String)
    .replicationInstanceId(java.lang.String)
//  .allocatedStorage(java.lang.Number)
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.Boolean)
//  .autoMinorVersionUpgrade(IResolvable)
//  .availabilityZone(java.lang.String)
//  .dnsNameServers(java.lang.String)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .kerberosAuthenticationSettings(DmsReplicationInstanceKerberosAuthenticationSettings)
//  .kmsKeyArn(java.lang.String)
//  .multiAz(java.lang.Boolean)
//  .multiAz(IResolvable)
//  .networkType(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .region(java.lang.String)
//  .replicationSubnetGroupId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsReplicationInstanceTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceClass">replicationInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceId">replicationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_id DmsReplicationInstance#replication_instance_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#apply_immediately DmsReplicationInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dnsNameServers">dnsNameServers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#id DmsReplicationInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.kerberosAuthenticationSettings">kerberosAuthenticationSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a></code> | kerberos_authentication_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#kms_key_arn DmsReplicationInstance#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationSubnetGroupId">replicationSubnetGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags_all DmsReplicationInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="replicationInstanceClass" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}.

---

##### `replicationInstanceId`<sup>Required</sup> <a name="replicationInstanceId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_id DmsReplicationInstance#replication_instance_id}.

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#apply_immediately DmsReplicationInstance#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}.

---

##### `dnsNameServers`<sup>Optional</sup> <a name="dnsNameServers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.dnsNameServers"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#id DmsReplicationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosAuthenticationSettings`<sup>Optional</sup> <a name="kerberosAuthenticationSettings" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.kerberosAuthenticationSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a>

kerberos_authentication_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#kerberos_authentication_settings DmsReplicationInstance#kerberos_authentication_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#kms_key_arn DmsReplicationInstance#kms_key_arn}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.multiAz"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#region DmsReplicationInstance#region}

---

##### `replicationSubnetGroupId`<sup>Optional</sup> <a name="replicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.replicationSubnetGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags_all DmsReplicationInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#timeouts DmsReplicationInstance#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putKerberosAuthenticationSettings">putKerberosAuthenticationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers">resetDnsNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetKerberosAuthenticationSettings">resetKerberosAuthenticationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupId">resetReplicationSubnetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKerberosAuthenticationSettings` <a name="putKerberosAuthenticationSettings" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putKerberosAuthenticationSettings"></a>

```java
public void putKerberosAuthenticationSettings(DmsReplicationInstanceKerberosAuthenticationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putKerberosAuthenticationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putTimeouts"></a>

```java
public void putTimeouts(DmsReplicationInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a>

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage"></a>

```java
public void resetAllocatedStorage()
```

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade"></a>

```java
public void resetAllowMajorVersionUpgrade()
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetDnsNameServers` <a name="resetDnsNameServers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers"></a>

```java
public void resetDnsNameServers()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetId"></a>

```java
public void resetId()
```

##### `resetKerberosAuthenticationSettings` <a name="resetKerberosAuthenticationSettings" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetKerberosAuthenticationSettings"></a>

```java
public void resetKerberosAuthenticationSettings()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz"></a>

```java
public void resetMultiAz()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplicationSubnetGroupId` <a name="resetReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupId"></a>

```java
public void resetReplicationSubnetGroupId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReplicationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstance;

DmsReplicationInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstance;

DmsReplicationInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstance;

DmsReplicationInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstance;

DmsReplicationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsReplicationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DmsReplicationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsReplicationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kerberosAuthenticationSettings">kerberosAuthenticationSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference">DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIps">replicationInstancePrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIps">replicationInstancePublicIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference">DmsReplicationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput">dnsNameServersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kerberosAuthenticationSettingsInput">kerberosAuthenticationSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput">multiAzInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput">replicationInstanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdInput">replicationInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdInput">replicationSubnetGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers">dnsNameServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass">replicationInstanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceId">replicationInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupId">replicationSubnetGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kerberosAuthenticationSettings`<sup>Required</sup> <a name="kerberosAuthenticationSettings" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kerberosAuthenticationSettings"></a>

```java
public DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference getKerberosAuthenticationSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference">DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference</a>

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn"></a>

```java
public java.lang.String getReplicationInstanceArn();
```

- *Type:* java.lang.String

---

##### `replicationInstancePrivateIps`<sup>Required</sup> <a name="replicationInstancePrivateIps" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIps"></a>

```java
public java.util.List<java.lang.String> getReplicationInstancePrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replicationInstancePublicIps`<sup>Required</sup> <a name="replicationInstancePublicIps" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIps"></a>

```java
public java.util.List<java.lang.String> getReplicationInstancePublicIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeouts"></a>

```java
public DmsReplicationInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference">DmsReplicationInstanceTimeoutsOutputReference</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput"></a>

```java
public java.lang.Number getAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput"></a>

```java
public java.lang.Object getAllowMajorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Object getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `dnsNameServersInput`<sup>Optional</sup> <a name="dnsNameServersInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput"></a>

```java
public java.lang.String getDnsNameServersInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kerberosAuthenticationSettingsInput`<sup>Optional</sup> <a name="kerberosAuthenticationSettingsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kerberosAuthenticationSettingsInput"></a>

```java
public DmsReplicationInstanceKerberosAuthenticationSettings getKerberosAuthenticationSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput"></a>

```java
public java.lang.Object getMultiAzInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput"></a>

```java
public java.lang.Object getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicationInstanceClassInput`<sup>Optional</sup> <a name="replicationInstanceClassInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput"></a>

```java
public java.lang.String getReplicationInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `replicationInstanceIdInput`<sup>Optional</sup> <a name="replicationInstanceIdInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdInput"></a>

```java
public java.lang.String getReplicationInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `replicationSubnetGroupIdInput`<sup>Optional</sup> <a name="replicationSubnetGroupIdInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdInput"></a>

```java
public java.lang.String getReplicationSubnetGroupIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Object getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `dnsNameServers`<sup>Required</sup> <a name="dnsNameServers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers"></a>

```java
public java.lang.String getDnsNameServers();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="replicationInstanceClass" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass"></a>

```java
public java.lang.String getReplicationInstanceClass();
```

- *Type:* java.lang.String

---

##### `replicationInstanceId`<sup>Required</sup> <a name="replicationInstanceId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceId"></a>

```java
public java.lang.String getReplicationInstanceId();
```

- *Type:* java.lang.String

---

##### `replicationSubnetGroupId`<sup>Required</sup> <a name="replicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupId"></a>

```java
public java.lang.String getReplicationSubnetGroupId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationInstanceConfig <a name="DmsReplicationInstanceConfig" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstanceConfig;

DmsReplicationInstanceConfig.builder()
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
    .replicationInstanceClass(java.lang.String)
    .replicationInstanceId(java.lang.String)
//  .allocatedStorage(java.lang.Number)
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.Boolean)
//  .autoMinorVersionUpgrade(IResolvable)
//  .availabilityZone(java.lang.String)
//  .dnsNameServers(java.lang.String)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .kerberosAuthenticationSettings(DmsReplicationInstanceKerberosAuthenticationSettings)
//  .kmsKeyArn(java.lang.String)
//  .multiAz(java.lang.Boolean)
//  .multiAz(IResolvable)
//  .networkType(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .region(java.lang.String)
//  .replicationSubnetGroupId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsReplicationInstanceTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass">replicationInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceId">replicationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_id DmsReplicationInstance#replication_instance_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#apply_immediately DmsReplicationInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers">dnsNameServers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#id DmsReplicationInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kerberosAuthenticationSettings">kerberosAuthenticationSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a></code> | kerberos_authentication_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#kms_key_arn DmsReplicationInstance#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupId">replicationSubnetGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags_all DmsReplicationInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="replicationInstanceClass" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass"></a>

```java
public java.lang.String getReplicationInstanceClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}.

---

##### `replicationInstanceId`<sup>Required</sup> <a name="replicationInstanceId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceId"></a>

```java
public java.lang.String getReplicationInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_instance_id DmsReplicationInstance#replication_instance_id}.

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#apply_immediately DmsReplicationInstance#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Object getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}.

---

##### `dnsNameServers`<sup>Optional</sup> <a name="dnsNameServers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers"></a>

```java
public java.lang.String getDnsNameServers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#id DmsReplicationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosAuthenticationSettings`<sup>Optional</sup> <a name="kerberosAuthenticationSettings" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kerberosAuthenticationSettings"></a>

```java
public DmsReplicationInstanceKerberosAuthenticationSettings getKerberosAuthenticationSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a>

kerberos_authentication_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#kerberos_authentication_settings DmsReplicationInstance#kerberos_authentication_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#kms_key_arn DmsReplicationInstance#kms_key_arn}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#region DmsReplicationInstance#region}

---

##### `replicationSubnetGroupId`<sup>Optional</sup> <a name="replicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupId"></a>

```java
public java.lang.String getReplicationSubnetGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#tags_all DmsReplicationInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.timeouts"></a>

```java
public DmsReplicationInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#timeouts DmsReplicationInstance#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}.

---

### DmsReplicationInstanceKerberosAuthenticationSettings <a name="DmsReplicationInstanceKerberosAuthenticationSettings" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstanceKerberosAuthenticationSettings;

DmsReplicationInstanceKerberosAuthenticationSettings.builder()
    .keyCacheSecretIamArn(java.lang.String)
    .keyCacheSecretId(java.lang.String)
    .krb5FileContents(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings.property.keyCacheSecretIamArn">keyCacheSecretIamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#key_cache_secret_iam_arn DmsReplicationInstance#key_cache_secret_iam_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings.property.keyCacheSecretId">keyCacheSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#key_cache_secret_id DmsReplicationInstance#key_cache_secret_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings.property.krb5FileContents">krb5FileContents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#krb5_file_contents DmsReplicationInstance#krb5_file_contents}. |

---

##### `keyCacheSecretIamArn`<sup>Required</sup> <a name="keyCacheSecretIamArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings.property.keyCacheSecretIamArn"></a>

```java
public java.lang.String getKeyCacheSecretIamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#key_cache_secret_iam_arn DmsReplicationInstance#key_cache_secret_iam_arn}.

---

##### `keyCacheSecretId`<sup>Required</sup> <a name="keyCacheSecretId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings.property.keyCacheSecretId"></a>

```java
public java.lang.String getKeyCacheSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#key_cache_secret_id DmsReplicationInstance#key_cache_secret_id}.

---

##### `krb5FileContents`<sup>Required</sup> <a name="krb5FileContents" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings.property.krb5FileContents"></a>

```java
public java.lang.String getKrb5FileContents();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#krb5_file_contents DmsReplicationInstance#krb5_file_contents}.

---

### DmsReplicationInstanceTimeouts <a name="DmsReplicationInstanceTimeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstanceTimeouts;

DmsReplicationInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#create DmsReplicationInstance#create}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#delete DmsReplicationInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#update DmsReplicationInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#create DmsReplicationInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#delete DmsReplicationInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/dms_replication_instance#update DmsReplicationInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference <a name="DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference;

new DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretIamArnInput">keyCacheSecretIamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretIdInput">keyCacheSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.krb5FileContentsInput">krb5FileContentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretIamArn">keyCacheSecretIamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretId">keyCacheSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.krb5FileContents">krb5FileContents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyCacheSecretIamArnInput`<sup>Optional</sup> <a name="keyCacheSecretIamArnInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretIamArnInput"></a>

```java
public java.lang.String getKeyCacheSecretIamArnInput();
```

- *Type:* java.lang.String

---

##### `keyCacheSecretIdInput`<sup>Optional</sup> <a name="keyCacheSecretIdInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretIdInput"></a>

```java
public java.lang.String getKeyCacheSecretIdInput();
```

- *Type:* java.lang.String

---

##### `krb5FileContentsInput`<sup>Optional</sup> <a name="krb5FileContentsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.krb5FileContentsInput"></a>

```java
public java.lang.String getKrb5FileContentsInput();
```

- *Type:* java.lang.String

---

##### `keyCacheSecretIamArn`<sup>Required</sup> <a name="keyCacheSecretIamArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretIamArn"></a>

```java
public java.lang.String getKeyCacheSecretIamArn();
```

- *Type:* java.lang.String

---

##### `keyCacheSecretId`<sup>Required</sup> <a name="keyCacheSecretId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.keyCacheSecretId"></a>

```java
public java.lang.String getKeyCacheSecretId();
```

- *Type:* java.lang.String

---

##### `krb5FileContents`<sup>Required</sup> <a name="krb5FileContents" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.krb5FileContents"></a>

```java
public java.lang.String getKrb5FileContents();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettingsOutputReference.property.internalValue"></a>

```java
public DmsReplicationInstanceKerberosAuthenticationSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceKerberosAuthenticationSettings">DmsReplicationInstanceKerberosAuthenticationSettings</a>

---


### DmsReplicationInstanceTimeoutsOutputReference <a name="DmsReplicationInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_instance.DmsReplicationInstanceTimeoutsOutputReference;

new DmsReplicationInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a>

---



