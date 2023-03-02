# `sagemakerNotebookInstance` Submodule <a name="`sagemakerNotebookInstance` Submodule" id="@cdktf/provider-aws.sagemakerNotebookInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstance <a name="SagemakerNotebookInstance" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance aws_sagemaker_notebook_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.Builder.create(Construct scope, java.lang.String id)
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
    .roleArn(java.lang.String)
//  .acceleratorTypes(java.util.List<java.lang.String>)
//  .additionalCodeRepositories(java.util.List<java.lang.String>)
//  .defaultCodeRepository(java.lang.String)
//  .directInternetAccess(java.lang.String)
//  .id(java.lang.String)
//  .instanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration)
//  .kmsKeyId(java.lang.String)
//  .lifecycleConfigName(java.lang.String)
//  .platformIdentifier(java.lang.String)
//  .rootAccess(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .volumeSize(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.additionalCodeRepositories">additionalCodeRepositories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.defaultCodeRepository">defaultCodeRepository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.directInternetAccess">directInternetAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceMetadataServiceConfiguration">instanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | instance_metadata_service_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycleConfigName">lifecycleConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.platformIdentifier">platformIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.rootAccess">rootAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}.

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.acceleratorTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}.

---

##### `additionalCodeRepositories`<sup>Optional</sup> <a name="additionalCodeRepositories" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.additionalCodeRepositories"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}.

---

##### `defaultCodeRepository`<sup>Optional</sup> <a name="defaultCodeRepository" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.defaultCodeRepository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}.

---

##### `directInternetAccess`<sup>Optional</sup> <a name="directInternetAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.directInternetAccess"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceMetadataServiceConfiguration`<sup>Optional</sup> <a name="instanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.instanceMetadataServiceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

instance_metadata_service_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}.

---

##### `lifecycleConfigName`<sup>Optional</sup> <a name="lifecycleConfigName" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.lifecycleConfigName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}.

---

##### `platformIdentifier`<sup>Optional</sup> <a name="platformIdentifier" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.platformIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}.

---

##### `rootAccess`<sup>Optional</sup> <a name="rootAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.rootAccess"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.volumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration">putInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes">resetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories">resetAdditionalCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository">resetDefaultCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess">resetDirectInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration">resetInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName">resetLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier">resetPlatformIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess">resetRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInstanceMetadataServiceConfiguration` <a name="putInstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration"></a>

```java
public void putInstanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `resetAcceleratorTypes` <a name="resetAcceleratorTypes" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes"></a>

```java
public void resetAcceleratorTypes()
```

##### `resetAdditionalCodeRepositories` <a name="resetAdditionalCodeRepositories" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories"></a>

```java
public void resetAdditionalCodeRepositories()
```

##### `resetDefaultCodeRepository` <a name="resetDefaultCodeRepository" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository"></a>

```java
public void resetDefaultCodeRepository()
```

##### `resetDirectInternetAccess` <a name="resetDirectInternetAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess"></a>

```java
public void resetDirectInternetAccess()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceMetadataServiceConfiguration` <a name="resetInstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration"></a>

```java
public void resetInstanceMetadataServiceConfiguration()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLifecycleConfigName` <a name="resetLifecycleConfigName" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName"></a>

```java
public void resetLifecycleConfigName()
```

##### `resetPlatformIdentifier` <a name="resetPlatformIdentifier" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier"></a>

```java
public void resetPlatformIdentifier()
```

##### `resetRootAccess` <a name="resetRootAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess"></a>

```java
public void resetRootAccess()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance.SagemakerNotebookInstance;

SagemakerNotebookInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration">instanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput">acceleratorTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput">additionalCodeRepositoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput">defaultCodeRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput">directInternetAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput">instanceMetadataServiceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput">lifecycleConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput">platformIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput">rootAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories">additionalCodeRepositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository">defaultCodeRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess">directInternetAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName">lifecycleConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier">platformIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess">rootAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `instanceMetadataServiceConfiguration`<sup>Required</sup> <a name="instanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration"></a>

```java
public SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference getInstanceMetadataServiceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `acceleratorTypesInput`<sup>Optional</sup> <a name="acceleratorTypesInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalCodeRepositoriesInput`<sup>Optional</sup> <a name="additionalCodeRepositoriesInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalCodeRepositoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultCodeRepositoryInput`<sup>Optional</sup> <a name="defaultCodeRepositoryInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput"></a>

```java
public java.lang.String getDefaultCodeRepositoryInput();
```

- *Type:* java.lang.String

---

##### `directInternetAccessInput`<sup>Optional</sup> <a name="directInternetAccessInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput"></a>

```java
public java.lang.String getDirectInternetAccessInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceMetadataServiceConfigurationInput`<sup>Optional</sup> <a name="instanceMetadataServiceConfigurationInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput"></a>

```java
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration getInstanceMetadataServiceConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigNameInput`<sup>Optional</sup> <a name="lifecycleConfigNameInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput"></a>

```java
public java.lang.String getLifecycleConfigNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `platformIdentifierInput`<sup>Optional</sup> <a name="platformIdentifierInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput"></a>

```java
public java.lang.String getPlatformIdentifierInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `rootAccessInput`<sup>Optional</sup> <a name="rootAccessInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput"></a>

```java
public java.lang.String getRootAccessInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalCodeRepositories`<sup>Required</sup> <a name="additionalCodeRepositories" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories"></a>

```java
public java.util.List<java.lang.String> getAdditionalCodeRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultCodeRepository`<sup>Required</sup> <a name="defaultCodeRepository" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository"></a>

```java
public java.lang.String getDefaultCodeRepository();
```

- *Type:* java.lang.String

---

##### `directInternetAccess`<sup>Required</sup> <a name="directInternetAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess"></a>

```java
public java.lang.String getDirectInternetAccess();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigName`<sup>Required</sup> <a name="lifecycleConfigName" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName"></a>

```java
public java.lang.String getLifecycleConfigName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platformIdentifier`<sup>Required</sup> <a name="platformIdentifier" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier"></a>

```java
public java.lang.String getPlatformIdentifier();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `rootAccess`<sup>Required</sup> <a name="rootAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess"></a>

```java
public java.lang.String getRootAccess();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceConfig <a name="SagemakerNotebookInstanceConfig" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance.SagemakerNotebookInstanceConfig;

SagemakerNotebookInstanceConfig.builder()
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
    .roleArn(java.lang.String)
//  .acceleratorTypes(java.util.List<java.lang.String>)
//  .additionalCodeRepositories(java.util.List<java.lang.String>)
//  .defaultCodeRepository(java.lang.String)
//  .directInternetAccess(java.lang.String)
//  .id(java.lang.String)
//  .instanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration)
//  .kmsKeyId(java.lang.String)
//  .lifecycleConfigName(java.lang.String)
//  .platformIdentifier(java.lang.String)
//  .rootAccess(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .volumeSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories">additionalCodeRepositories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository">defaultCodeRepository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess">directInternetAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration">instanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | instance_metadata_service_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName">lifecycleConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier">platformIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess">rootAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}.

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}.

---

##### `additionalCodeRepositories`<sup>Optional</sup> <a name="additionalCodeRepositories" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories"></a>

```java
public java.util.List<java.lang.String> getAdditionalCodeRepositories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}.

---

##### `defaultCodeRepository`<sup>Optional</sup> <a name="defaultCodeRepository" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository"></a>

```java
public java.lang.String getDefaultCodeRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}.

---

##### `directInternetAccess`<sup>Optional</sup> <a name="directInternetAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess"></a>

```java
public java.lang.String getDirectInternetAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceMetadataServiceConfiguration`<sup>Optional</sup> <a name="instanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration"></a>

```java
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration getInstanceMetadataServiceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

instance_metadata_service_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}.

---

##### `lifecycleConfigName`<sup>Optional</sup> <a name="lifecycleConfigName" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName"></a>

```java
public java.lang.String getLifecycleConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}.

---

##### `platformIdentifier`<sup>Optional</sup> <a name="platformIdentifier" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier"></a>

```java
public java.lang.String getPlatformIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}.

---

##### `rootAccess`<sup>Optional</sup> <a name="rootAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess"></a>

```java
public java.lang.String getRootAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}.

---

### SagemakerNotebookInstanceInstanceMetadataServiceConfiguration <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration;

SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.builder()
//  .minimumInstanceMetadataServiceVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion">minimumInstanceMetadataServiceVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}. |

---

##### `minimumInstanceMetadataServiceVersion`<sup>Optional</sup> <a name="minimumInstanceMetadataServiceVersion" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion"></a>

```java
public java.lang.String getMinimumInstanceMetadataServiceVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_notebook_instance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference;

new SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion">resetMinimumInstanceMetadataServiceVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumInstanceMetadataServiceVersion` <a name="resetMinimumInstanceMetadataServiceVersion" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion"></a>

```java
public void resetMinimumInstanceMetadataServiceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput">minimumInstanceMetadataServiceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion">minimumInstanceMetadataServiceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumInstanceMetadataServiceVersionInput`<sup>Optional</sup> <a name="minimumInstanceMetadataServiceVersionInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput"></a>

```java
public java.lang.String getMinimumInstanceMetadataServiceVersionInput();
```

- *Type:* java.lang.String

---

##### `minimumInstanceMetadataServiceVersion`<sup>Required</sup> <a name="minimumInstanceMetadataServiceVersion" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion"></a>

```java
public java.lang.String getMinimumInstanceMetadataServiceVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue"></a>

```java
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---



