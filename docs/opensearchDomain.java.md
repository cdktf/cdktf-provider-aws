# `opensearchDomain` Submodule <a name="`opensearchDomain` Submodule" id="@cdktf/provider-aws.opensearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDomain <a name="OpensearchDomain" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain aws_opensearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomain;

OpensearchDomain.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
//  .accessPolicies(java.lang.String)
//  .advancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .advancedSecurityOptions(OpensearchDomainAdvancedSecurityOptions)
//  .autoTuneOptions(OpensearchDomainAutoTuneOptions)
//  .clusterConfig(OpensearchDomainClusterConfig)
//  .cognitoOptions(OpensearchDomainCognitoOptions)
//  .domainEndpointOptions(OpensearchDomainDomainEndpointOptions)
//  .ebsOptions(OpensearchDomainEbsOptions)
//  .encryptAtRest(OpensearchDomainEncryptAtRest)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .logPublishingOptions(IResolvable)
//  .logPublishingOptions(java.util.List<OpensearchDomainLogPublishingOptions>)
//  .nodeToNodeEncryption(OpensearchDomainNodeToNodeEncryption)
//  .snapshotOptions(OpensearchDomainSnapshotOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchDomainTimeouts)
//  .vpcOptions(OpensearchDomainVpcOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.accessPolicies">accessPolicies</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedOptions">advancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.encryptAtRest">encryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.logPublishingOptions">logPublishingOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>></code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}.

---

##### `accessPolicies`<sup>Optional</sup> <a name="accessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.accessPolicies"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}.

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}.

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedSecurityOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_security_options OpensearchDomain#advanced_security_options}

---

##### `autoTuneOptions`<sup>Optional</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.autoTuneOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#auto_tune_options OpensearchDomain#auto_tune_options}

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cluster_config OpensearchDomain#cluster_config}

---

##### `cognitoOptions`<sup>Optional</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.cognitoOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cognito_options OpensearchDomain#cognito_options}

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="domainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainEndpointOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_endpoint_options OpensearchDomain#domain_endpoint_options}

---

##### `ebsOptions`<sup>Optional</sup> <a name="ebsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.ebsOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_options OpensearchDomain#ebs_options}

---

##### `encryptAtRest`<sup>Optional</sup> <a name="encryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.encryptAtRest"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#encrypt_at_rest OpensearchDomain#encrypt_at_rest}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.logPublishingOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>>

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_publishing_options OpensearchDomain#log_publishing_options}

---

##### `nodeToNodeEncryption`<sup>Optional</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.nodeToNodeEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#node_to_node_encryption OpensearchDomain#node_to_node_encryption}

---

##### `snapshotOptions`<sup>Optional</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.snapshotOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#snapshot_options OpensearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#timeouts OpensearchDomain#timeouts}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#vpc_options OpensearchDomain#vpc_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions">putAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions">putAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig">putClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions">putCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions">putDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions">putEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest">putEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions">putLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption">putNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions">putSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies">resetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions">resetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions">resetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions">resetAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig">resetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions">resetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions">resetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions">resetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest">resetEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions">resetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption">resetNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions">resetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions">resetVpcOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdvancedSecurityOptions` <a name="putAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions"></a>

```java
public void putAdvancedSecurityOptions(OpensearchDomainAdvancedSecurityOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---

##### `putAutoTuneOptions` <a name="putAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions"></a>

```java
public void putAutoTuneOptions(OpensearchDomainAutoTuneOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig"></a>

```java
public void putClusterConfig(OpensearchDomainClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---

##### `putCognitoOptions` <a name="putCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions"></a>

```java
public void putCognitoOptions(OpensearchDomainCognitoOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---

##### `putDomainEndpointOptions` <a name="putDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions"></a>

```java
public void putDomainEndpointOptions(OpensearchDomainDomainEndpointOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---

##### `putEbsOptions` <a name="putEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions"></a>

```java
public void putEbsOptions(OpensearchDomainEbsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---

##### `putEncryptAtRest` <a name="putEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest"></a>

```java
public void putEncryptAtRest(OpensearchDomainEncryptAtRest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---

##### `putLogPublishingOptions` <a name="putLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions"></a>

```java
public void putLogPublishingOptions(IResolvable OR java.util.List<OpensearchDomainLogPublishingOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>>

---

##### `putNodeToNodeEncryption` <a name="putNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption"></a>

```java
public void putNodeToNodeEncryption(OpensearchDomainNodeToNodeEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---

##### `putSnapshotOptions` <a name="putSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions"></a>

```java
public void putSnapshotOptions(OpensearchDomainSnapshotOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts"></a>

```java
public void putTimeouts(OpensearchDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions"></a>

```java
public void putVpcOptions(OpensearchDomainVpcOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---

##### `resetAccessPolicies` <a name="resetAccessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies"></a>

```java
public void resetAccessPolicies()
```

##### `resetAdvancedOptions` <a name="resetAdvancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions"></a>

```java
public void resetAdvancedOptions()
```

##### `resetAdvancedSecurityOptions` <a name="resetAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions"></a>

```java
public void resetAdvancedSecurityOptions()
```

##### `resetAutoTuneOptions` <a name="resetAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions"></a>

```java
public void resetAutoTuneOptions()
```

##### `resetClusterConfig` <a name="resetClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig"></a>

```java
public void resetClusterConfig()
```

##### `resetCognitoOptions` <a name="resetCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions"></a>

```java
public void resetCognitoOptions()
```

##### `resetDomainEndpointOptions` <a name="resetDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions"></a>

```java
public void resetDomainEndpointOptions()
```

##### `resetEbsOptions` <a name="resetEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions"></a>

```java
public void resetEbsOptions()
```

##### `resetEncryptAtRest` <a name="resetEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest"></a>

```java
public void resetEncryptAtRest()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId"></a>

```java
public void resetId()
```

##### `resetLogPublishingOptions` <a name="resetLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions"></a>

```java
public void resetLogPublishingOptions()
```

##### `resetNodeToNodeEncryption` <a name="resetNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption"></a>

```java
public void resetNodeToNodeEncryption()
```

##### `resetSnapshotOptions` <a name="resetSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions"></a>

```java
public void resetSnapshotOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcOptions` <a name="resetVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions"></a>

```java
public void resetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomain;

OpensearchDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomain;

OpensearchDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomain;

OpensearchDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest">encryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.kibanaEndpoint">kibanaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput">accessPoliciesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput">advancedOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput">advancedSecurityOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput">autoTuneOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput">clusterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput">cognitoOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput">domainEndpointOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput">ebsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput">encryptAtRestInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput">logPublishingOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput">nodeToNodeEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput">snapshotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies">accessPolicies</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions">advancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions"></a>

```java
public OpensearchDomainAdvancedSecurityOptionsOutputReference getAdvancedSecurityOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoTuneOptions`<sup>Required</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions"></a>

```java
public OpensearchDomainAutoTuneOptionsOutputReference getAutoTuneOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig"></a>

```java
public OpensearchDomainClusterConfigOutputReference getClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a>

---

##### `cognitoOptions`<sup>Required</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions"></a>

```java
public OpensearchDomainCognitoOptionsOutputReference getCognitoOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a>

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="domainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions"></a>

```java
public OpensearchDomainDomainEndpointOptionsOutputReference getDomainEndpointOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `ebsOptions`<sup>Required</sup> <a name="ebsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions"></a>

```java
public OpensearchDomainEbsOptionsOutputReference getEbsOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a>

---

##### `encryptAtRest`<sup>Required</sup> <a name="encryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest"></a>

```java
public OpensearchDomainEncryptAtRestOutputReference getEncryptAtRest();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `kibanaEndpoint`<sup>Required</sup> <a name="kibanaEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.kibanaEndpoint"></a>

```java
public java.lang.String getKibanaEndpoint();
```

- *Type:* java.lang.String

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions"></a>

```java
public OpensearchDomainLogPublishingOptionsList getLogPublishingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a>

---

##### `nodeToNodeEncryption`<sup>Required</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption"></a>

```java
public OpensearchDomainNodeToNodeEncryptionOutputReference getNodeToNodeEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a>

---

##### `snapshotOptions`<sup>Required</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions"></a>

```java
public OpensearchDomainSnapshotOptionsOutputReference getSnapshotOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts"></a>

```java
public OpensearchDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions"></a>

```java
public OpensearchDomainVpcOptionsOutputReference getVpcOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a>

---

##### `accessPoliciesInput`<sup>Optional</sup> <a name="accessPoliciesInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput"></a>

```java
public java.lang.String getAccessPoliciesInput();
```

- *Type:* java.lang.String

---

##### `advancedOptionsInput`<sup>Optional</sup> <a name="advancedOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdvancedOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `advancedSecurityOptionsInput`<sup>Optional</sup> <a name="advancedSecurityOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput"></a>

```java
public OpensearchDomainAdvancedSecurityOptions getAdvancedSecurityOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---

##### `autoTuneOptionsInput`<sup>Optional</sup> <a name="autoTuneOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput"></a>

```java
public OpensearchDomainAutoTuneOptions getAutoTuneOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput"></a>

```java
public OpensearchDomainClusterConfig getClusterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---

##### `cognitoOptionsInput`<sup>Optional</sup> <a name="cognitoOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput"></a>

```java
public OpensearchDomainCognitoOptions getCognitoOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---

##### `domainEndpointOptionsInput`<sup>Optional</sup> <a name="domainEndpointOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput"></a>

```java
public OpensearchDomainDomainEndpointOptions getDomainEndpointOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `ebsOptionsInput`<sup>Optional</sup> <a name="ebsOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput"></a>

```java
public OpensearchDomainEbsOptions getEbsOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---

##### `encryptAtRestInput`<sup>Optional</sup> <a name="encryptAtRestInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput"></a>

```java
public OpensearchDomainEncryptAtRest getEncryptAtRestInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logPublishingOptionsInput`<sup>Optional</sup> <a name="logPublishingOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput"></a>

```java
public java.lang.Object getLogPublishingOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>>

---

##### `nodeToNodeEncryptionInput`<sup>Optional</sup> <a name="nodeToNodeEncryptionInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput"></a>

```java
public OpensearchDomainNodeToNodeEncryption getNodeToNodeEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---

##### `snapshotOptionsInput`<sup>Optional</sup> <a name="snapshotOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput"></a>

```java
public OpensearchDomainSnapshotOptions getSnapshotOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput"></a>

```java
public OpensearchDomainVpcOptions getVpcOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies"></a>

```java
public java.lang.String getAccessPolicies();
```

- *Type:* java.lang.String

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDomainAdvancedSecurityOptions <a name="OpensearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAdvancedSecurityOptions;

OpensearchDomainAdvancedSecurityOptions.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .anonymousAuthEnabled(java.lang.Boolean)
//  .anonymousAuthEnabled(IResolvable)
//  .internalUserDatabaseEnabled(java.lang.Boolean)
//  .internalUserDatabaseEnabled(IResolvable)
//  .masterUserOptions(OpensearchDomainAdvancedSecurityOptionsMasterUserOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">anonymousAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | master_user_options block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `anonymousAuthEnabled`<sup>Optional</sup> <a name="anonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```java
public java.lang.Object getAnonymousAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}.

---

##### `internalUserDatabaseEnabled`<sup>Optional</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```java
public java.lang.Object getInternalUserDatabaseEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}.

---

##### `masterUserOptions`<sup>Optional</sup> <a name="masterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```java
public OpensearchDomainAdvancedSecurityOptionsMasterUserOptions getMasterUserOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_options OpensearchDomain#master_user_options}

---

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions;

OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.builder()
//  .masterUserArn(java.lang.String)
//  .masterUserName(java.lang.String)
//  .masterUserPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">masterUserArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_name OpensearchDomain#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_password OpensearchDomain#master_user_password}. |

---

##### `masterUserArn`<sup>Optional</sup> <a name="masterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```java
public java.lang.String getMasterUserArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_name OpensearchDomain#master_user_name}.

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_password OpensearchDomain#master_user_password}.

---

### OpensearchDomainAutoTuneOptions <a name="OpensearchDomainAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAutoTuneOptions;

OpensearchDomainAutoTuneOptions.builder()
    .desiredState(java.lang.String)
//  .maintenanceSchedule(IResolvable)
//  .maintenanceSchedule(java.util.List<OpensearchDomainAutoTuneOptionsMaintenanceSchedule>)
//  .rollbackOnDisable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#desired_state OpensearchDomain#desired_state}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>></code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}. |

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#desired_state OpensearchDomain#desired_state}.

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule"></a>

```java
public java.lang.Object getMaintenanceSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>>

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#maintenance_schedule OpensearchDomain#maintenance_schedule}

---

##### `rollbackOnDisable`<sup>Optional</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable"></a>

```java
public java.lang.String getRollbackOnDisable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceSchedule <a name="OpensearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule;

OpensearchDomainAutoTuneOptionsMaintenanceSchedule.builder()
    .cronExpressionForRecurrence(java.lang.String)
    .duration(OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration)
    .startAt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt">startAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#start_at OpensearchDomain#start_at}. |

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence"></a>

```java
public java.lang.String getCronExpressionForRecurrence();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration"></a>

```java
public OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration getDuration();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

duration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#duration OpensearchDomain#duration}

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt"></a>

```java
public java.lang.String getStartAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#start_at OpensearchDomain#start_at}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration;

OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#unit OpensearchDomain#unit}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#value OpensearchDomain#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#unit OpensearchDomain#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#value OpensearchDomain#value}.

---

### OpensearchDomainClusterConfig <a name="OpensearchDomainClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainClusterConfig;

OpensearchDomainClusterConfig.builder()
//  .coldStorageOptions(OpensearchDomainClusterConfigColdStorageOptions)
//  .dedicatedMasterCount(java.lang.Number)
//  .dedicatedMasterEnabled(java.lang.Boolean)
//  .dedicatedMasterEnabled(IResolvable)
//  .dedicatedMasterType(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .instanceType(java.lang.String)
//  .warmCount(java.lang.Number)
//  .warmEnabled(java.lang.Boolean)
//  .warmEnabled(IResolvable)
//  .warmType(java.lang.String)
//  .zoneAwarenessConfig(OpensearchDomainClusterConfigZoneAwarenessConfig)
//  .zoneAwarenessEnabled(java.lang.Boolean)
//  .zoneAwarenessEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | cold_storage_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_count OpensearchDomain#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_type OpensearchDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount">warmCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_count OpensearchDomain#warm_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled">warmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType">warmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_type OpensearchDomain#warm_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | zone_awareness_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}. |

---

##### `coldStorageOptions`<sup>Optional</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions"></a>

```java
public OpensearchDomainClusterConfigColdStorageOptions getColdStorageOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cold_storage_options OpensearchDomain#cold_storage_options}

---

##### `dedicatedMasterCount`<sup>Optional</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount"></a>

```java
public java.lang.Number getDedicatedMasterCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}.

---

##### `dedicatedMasterEnabled`<sup>Optional</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```java
public java.lang.Object getDedicatedMasterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}.

---

##### `dedicatedMasterType`<sup>Optional</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType"></a>

```java
public java.lang.String getDedicatedMasterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_count OpensearchDomain#instance_count}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_type OpensearchDomain#instance_type}.

---

##### `warmCount`<sup>Optional</sup> <a name="warmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount"></a>

```java
public java.lang.Number getWarmCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_count OpensearchDomain#warm_count}.

---

##### `warmEnabled`<sup>Optional</sup> <a name="warmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled"></a>

```java
public java.lang.Object getWarmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}.

---

##### `warmType`<sup>Optional</sup> <a name="warmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType"></a>

```java
public java.lang.String getWarmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_type OpensearchDomain#warm_type}.

---

##### `zoneAwarenessConfig`<sup>Optional</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig"></a>

```java
public OpensearchDomainClusterConfigZoneAwarenessConfig getZoneAwarenessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_config OpensearchDomain#zone_awareness_config}

---

##### `zoneAwarenessEnabled`<sup>Optional</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```java
public java.lang.Object getZoneAwarenessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}.

---

### OpensearchDomainClusterConfigColdStorageOptions <a name="OpensearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainClusterConfigColdStorageOptions;

OpensearchDomainClusterConfigColdStorageOptions.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainClusterConfigZoneAwarenessConfig <a name="OpensearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainClusterConfigZoneAwarenessConfig;

OpensearchDomainClusterConfigZoneAwarenessConfig.builder()
//  .availabilityZoneCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}. |

---

##### `availabilityZoneCount`<sup>Optional</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```java
public java.lang.Number getAvailabilityZoneCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}.

---

### OpensearchDomainCognitoOptions <a name="OpensearchDomainCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainCognitoOptions;

OpensearchDomainCognitoOptions.builder()
    .identityPoolId(java.lang.String)
    .roleArn(java.lang.String)
    .userPoolId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#role_arn OpensearchDomain#role_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#role_arn OpensearchDomain#role_arn}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainConfig <a name="OpensearchDomainConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainConfig;

OpensearchDomainConfig.builder()
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
    .domainName(java.lang.String)
//  .accessPolicies(java.lang.String)
//  .advancedOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .advancedSecurityOptions(OpensearchDomainAdvancedSecurityOptions)
//  .autoTuneOptions(OpensearchDomainAutoTuneOptions)
//  .clusterConfig(OpensearchDomainClusterConfig)
//  .cognitoOptions(OpensearchDomainCognitoOptions)
//  .domainEndpointOptions(OpensearchDomainDomainEndpointOptions)
//  .ebsOptions(OpensearchDomainEbsOptions)
//  .encryptAtRest(OpensearchDomainEncryptAtRest)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .logPublishingOptions(IResolvable)
//  .logPublishingOptions(java.util.List<OpensearchDomainLogPublishingOptions>)
//  .nodeToNodeEncryption(OpensearchDomainNodeToNodeEncryption)
//  .snapshotOptions(OpensearchDomainSnapshotOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchDomainTimeouts)
//  .vpcOptions(OpensearchDomainVpcOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies">accessPolicies</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions">advancedOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest">encryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions">logPublishingOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>></code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}.

---

##### `accessPolicies`<sup>Optional</sup> <a name="accessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies"></a>

```java
public java.lang.String getAccessPolicies();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}.

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdvancedOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}.

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions"></a>

```java
public OpensearchDomainAdvancedSecurityOptions getAdvancedSecurityOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_security_options OpensearchDomain#advanced_security_options}

---

##### `autoTuneOptions`<sup>Optional</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions"></a>

```java
public OpensearchDomainAutoTuneOptions getAutoTuneOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#auto_tune_options OpensearchDomain#auto_tune_options}

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig"></a>

```java
public OpensearchDomainClusterConfig getClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cluster_config OpensearchDomain#cluster_config}

---

##### `cognitoOptions`<sup>Optional</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions"></a>

```java
public OpensearchDomainCognitoOptions getCognitoOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cognito_options OpensearchDomain#cognito_options}

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="domainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions"></a>

```java
public OpensearchDomainDomainEndpointOptions getDomainEndpointOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_endpoint_options OpensearchDomain#domain_endpoint_options}

---

##### `ebsOptions`<sup>Optional</sup> <a name="ebsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions"></a>

```java
public OpensearchDomainEbsOptions getEbsOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_options OpensearchDomain#ebs_options}

---

##### `encryptAtRest`<sup>Optional</sup> <a name="encryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest"></a>

```java
public OpensearchDomainEncryptAtRest getEncryptAtRest();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#encrypt_at_rest OpensearchDomain#encrypt_at_rest}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions"></a>

```java
public java.lang.Object getLogPublishingOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>>

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_publishing_options OpensearchDomain#log_publishing_options}

---

##### `nodeToNodeEncryption`<sup>Optional</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption"></a>

```java
public OpensearchDomainNodeToNodeEncryption getNodeToNodeEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#node_to_node_encryption OpensearchDomain#node_to_node_encryption}

---

##### `snapshotOptions`<sup>Optional</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions"></a>

```java
public OpensearchDomainSnapshotOptions getSnapshotOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#snapshot_options OpensearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts"></a>

```java
public OpensearchDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#timeouts OpensearchDomain#timeouts}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions"></a>

```java
public OpensearchDomainVpcOptions getVpcOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#vpc_options OpensearchDomain#vpc_options}

---

### OpensearchDomainDomainEndpointOptions <a name="OpensearchDomainDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainDomainEndpointOptions;

OpensearchDomainDomainEndpointOptions.builder()
//  .customEndpoint(java.lang.String)
//  .customEndpointCertificateArn(java.lang.String)
//  .customEndpointEnabled(java.lang.Boolean)
//  .customEndpointEnabled(IResolvable)
//  .enforceHttps(java.lang.Boolean)
//  .enforceHttps(IResolvable)
//  .tlsSecurityPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint">customEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps">enforceHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enforce_https OpensearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}. |

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint"></a>

```java
public java.lang.String getCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}.

---

##### `customEndpointCertificateArn`<sup>Optional</sup> <a name="customEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```java
public java.lang.String getCustomEndpointCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}.

---

##### `customEndpointEnabled`<sup>Optional</sup> <a name="customEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```java
public java.lang.Object getCustomEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}.

---

##### `enforceHttps`<sup>Optional</sup> <a name="enforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps"></a>

```java
public java.lang.Object getEnforceHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enforce_https OpensearchDomain#enforce_https}.

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="tlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```java
public java.lang.String getTlsSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}.

---

### OpensearchDomainEbsOptions <a name="OpensearchDomainEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainEbsOptions;

OpensearchDomainEbsOptions.builder()
    .ebsEnabled(java.lang.Boolean)
    .ebsEnabled(IResolvable)
//  .iops(java.lang.Number)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled">ebsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#iops OpensearchDomain#iops}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#throughput OpensearchDomain#throughput}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_size OpensearchDomain#volume_size}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_type OpensearchDomain#volume_type}. |

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled"></a>

```java
public java.lang.Object getEbsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#iops OpensearchDomain#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#throughput OpensearchDomain#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_size OpensearchDomain#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_type OpensearchDomain#volume_type}.

---

### OpensearchDomainEncryptAtRest <a name="OpensearchDomainEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainEncryptAtRest;

OpensearchDomainEncryptAtRest.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}.

---

### OpensearchDomainLogPublishingOptions <a name="OpensearchDomainLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainLogPublishingOptions;

OpensearchDomainLogPublishingOptions.builder()
    .cloudwatchLogGroupArn(java.lang.String)
    .logType(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_type OpensearchDomain#log_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_type OpensearchDomain#log_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainNodeToNodeEncryption <a name="OpensearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainNodeToNodeEncryption;

OpensearchDomainNodeToNodeEncryption.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainSnapshotOptions <a name="OpensearchDomainSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainSnapshotOptions;

OpensearchDomainSnapshotOptions.builder()
    .automatedSnapshotStartHour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}. |

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```java
public java.lang.Number getAutomatedSnapshotStartHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}.

---

### OpensearchDomainTimeouts <a name="OpensearchDomainTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainTimeouts;

OpensearchDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#create OpensearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#delete OpensearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#update OpensearchDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#create OpensearchDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#delete OpensearchDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#update OpensearchDomain#update}.

---

### OpensearchDomainVpcOptions <a name="OpensearchDomainVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainVpcOptions;

OpensearchDomainVpcOptions.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference;

new OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">resetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMasterUserArn` <a name="resetMasterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```java
public void resetMasterUserArn()
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```java
public void resetMasterUserName()
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```java
public void resetMasterUserPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">masterUserArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">masterUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `masterUserArnInput`<sup>Optional</sup> <a name="masterUserArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```java
public java.lang.String getMasterUserArnInput();
```

- *Type:* java.lang.String

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```java
public java.lang.String getMasterUserNameInput();
```

- *Type:* java.lang.String

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```java
public java.lang.String getMasterUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `masterUserArn`<sup>Required</sup> <a name="masterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```java
public java.lang.String getMasterUserArn();
```

- *Type:* java.lang.String

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainAdvancedSecurityOptionsMasterUserOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### OpensearchDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAdvancedSecurityOptionsOutputReference;

new OpensearchDomainAdvancedSecurityOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">putMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">resetAnonymousAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">resetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">resetMasterUserOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMasterUserOptions` <a name="putMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```java
public void putMasterUserOptions(OpensearchDomainAdvancedSecurityOptionsMasterUserOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `resetAnonymousAuthEnabled` <a name="resetAnonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```java
public void resetAnonymousAuthEnabled()
```

##### `resetInternalUserDatabaseEnabled` <a name="resetInternalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```java
public void resetInternalUserDatabaseEnabled()
```

##### `resetMasterUserOptions` <a name="resetMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```java
public void resetMasterUserOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">anonymousAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">internalUserDatabaseEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">masterUserOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">anonymousAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `masterUserOptions`<sup>Required</sup> <a name="masterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```java
public OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference getMasterUserOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `anonymousAuthEnabledInput`<sup>Optional</sup> <a name="anonymousAuthEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```java
public java.lang.Object getAnonymousAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="internalUserDatabaseEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```java
public java.lang.Object getInternalUserDatabaseEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterUserOptionsInput`<sup>Optional</sup> <a name="masterUserOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```java
public OpensearchDomainAdvancedSecurityOptionsMasterUserOptions getMasterUserOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `anonymousAuthEnabled`<sup>Required</sup> <a name="anonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```java
public java.lang.Object getAnonymousAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```java
public java.lang.Object getInternalUserDatabaseEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainAdvancedSecurityOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;

new OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```java
public OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList;

new OpensearchDomainAutoTuneOptionsMaintenanceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```java
public OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference;

new OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration">putDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration"></a>

```java
public void putDuration(OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput">cronExpressionForRecurrenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput">startAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">startAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```java
public OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference getDuration();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a>

---

##### `cronExpressionForRecurrenceInput`<sup>Optional</sup> <a name="cronExpressionForRecurrenceInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput"></a>

```java
public java.lang.String getCronExpressionForRecurrenceInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput"></a>

```java
public OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration getDurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---

##### `startAtInput`<sup>Optional</sup> <a name="startAtInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput"></a>

```java
public java.lang.String getStartAtInput();
```

- *Type:* java.lang.String

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```java
public java.lang.String getCronExpressionForRecurrence();
```

- *Type:* java.lang.String

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```java
public java.lang.String getStartAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a> OR com.hashicorp.cdktf.IResolvable

---


### OpensearchDomainAutoTuneOptionsOutputReference <a name="OpensearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainAutoTuneOptionsOutputReference;

new OpensearchDomainAutoTuneOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule">putMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule">resetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable">resetRollbackOnDisable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceSchedule` <a name="putMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule"></a>

```java
public void putMaintenanceSchedule(IResolvable OR java.util.List<OpensearchDomainAutoTuneOptionsMaintenanceSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>>

---

##### `resetMaintenanceSchedule` <a name="resetMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule"></a>

```java
public void resetMaintenanceSchedule()
```

##### `resetRollbackOnDisable` <a name="resetRollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable"></a>

```java
public void resetRollbackOnDisable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput">maintenanceScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput">rollbackOnDisableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```java
public OpensearchDomainAutoTuneOptionsMaintenanceScheduleList getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `maintenanceScheduleInput`<sup>Optional</sup> <a name="maintenanceScheduleInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput"></a>

```java
public java.lang.Object getMaintenanceScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>>

---

##### `rollbackOnDisableInput`<sup>Optional</sup> <a name="rollbackOnDisableInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput"></a>

```java
public java.lang.String getRollbackOnDisableInput();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `rollbackOnDisable`<sup>Required</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```java
public java.lang.String getRollbackOnDisable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainAutoTuneOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---


### OpensearchDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference;

new OpensearchDomainClusterConfigColdStorageOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainClusterConfigColdStorageOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---


### OpensearchDomainClusterConfigOutputReference <a name="OpensearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainClusterConfigOutputReference;

new OpensearchDomainClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions">putColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig">putZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions">resetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount">resetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">resetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType">resetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount">resetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled">resetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType">resetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig">resetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">resetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColdStorageOptions` <a name="putColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```java
public void putColdStorageOptions(OpensearchDomainClusterConfigColdStorageOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---

##### `putZoneAwarenessConfig` <a name="putZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```java
public void putZoneAwarenessConfig(OpensearchDomainClusterConfigZoneAwarenessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `resetColdStorageOptions` <a name="resetColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```java
public void resetColdStorageOptions()
```

##### `resetDedicatedMasterCount` <a name="resetDedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```java
public void resetDedicatedMasterCount()
```

##### `resetDedicatedMasterEnabled` <a name="resetDedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```java
public void resetDedicatedMasterEnabled()
```

##### `resetDedicatedMasterType` <a name="resetDedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```java
public void resetDedicatedMasterType()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetWarmCount` <a name="resetWarmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount"></a>

```java
public void resetWarmCount()
```

##### `resetWarmEnabled` <a name="resetWarmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```java
public void resetWarmEnabled()
```

##### `resetWarmType` <a name="resetWarmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType"></a>

```java
public void resetWarmType()
```

##### `resetZoneAwarenessConfig` <a name="resetZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```java
public void resetZoneAwarenessConfig()
```

##### `resetZoneAwarenessEnabled` <a name="resetZoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```java
public void resetZoneAwarenessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput">coldStorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">dedicatedMasterCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">dedicatedMasterEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">dedicatedMasterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput">warmCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput">warmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput">warmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">zoneAwarenessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">zoneAwarenessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount">warmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled">warmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType">warmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coldStorageOptions`<sup>Required</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```java
public OpensearchDomainClusterConfigColdStorageOptionsOutputReference getColdStorageOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```java
public OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference getZoneAwarenessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `coldStorageOptionsInput`<sup>Optional</sup> <a name="coldStorageOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```java
public OpensearchDomainClusterConfigColdStorageOptions getColdStorageOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---

##### `dedicatedMasterCountInput`<sup>Optional</sup> <a name="dedicatedMasterCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```java
public java.lang.Number getDedicatedMasterCountInput();
```

- *Type:* java.lang.Number

---

##### `dedicatedMasterEnabledInput`<sup>Optional</sup> <a name="dedicatedMasterEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```java
public java.lang.Object getDedicatedMasterEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dedicatedMasterTypeInput`<sup>Optional</sup> <a name="dedicatedMasterTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```java
public java.lang.String getDedicatedMasterTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `warmCountInput`<sup>Optional</sup> <a name="warmCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput"></a>

```java
public java.lang.Number getWarmCountInput();
```

- *Type:* java.lang.Number

---

##### `warmEnabledInput`<sup>Optional</sup> <a name="warmEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```java
public java.lang.Object getWarmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `warmTypeInput`<sup>Optional</sup> <a name="warmTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```java
public java.lang.String getWarmTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneAwarenessConfigInput`<sup>Optional</sup> <a name="zoneAwarenessConfigInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```java
public OpensearchDomainClusterConfigZoneAwarenessConfig getZoneAwarenessConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `zoneAwarenessEnabledInput`<sup>Optional</sup> <a name="zoneAwarenessEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```java
public java.lang.Object getZoneAwarenessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dedicatedMasterCount`<sup>Required</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```java
public java.lang.Number getDedicatedMasterCount();
```

- *Type:* java.lang.Number

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```java
public java.lang.Object getDedicatedMasterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```java
public java.lang.String getDedicatedMasterType();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `warmCount`<sup>Required</sup> <a name="warmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount"></a>

```java
public java.lang.Number getWarmCount();
```

- *Type:* java.lang.Number

---

##### `warmEnabled`<sup>Required</sup> <a name="warmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```java
public java.lang.Object getWarmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `warmType`<sup>Required</sup> <a name="warmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType"></a>

```java
public java.lang.String getWarmType();
```

- *Type:* java.lang.String

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```java
public java.lang.Object getZoneAwarenessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue"></a>

```java
public OpensearchDomainClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---


### OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference;

new OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">resetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneCount` <a name="resetAvailabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```java
public void resetAvailabilityZoneCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">availabilityZoneCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneCountInput`<sup>Optional</sup> <a name="availabilityZoneCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```java
public java.lang.Number getAvailabilityZoneCountInput();
```

- *Type:* java.lang.Number

---

##### `availabilityZoneCount`<sup>Required</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```java
public java.lang.Number getAvailabilityZoneCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```java
public OpensearchDomainClusterConfigZoneAwarenessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---


### OpensearchDomainCognitoOptionsOutputReference <a name="OpensearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainCognitoOptionsOutputReference;

new OpensearchDomainCognitoOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainCognitoOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---


### OpensearchDomainDomainEndpointOptionsOutputReference <a name="OpensearchDomainDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainDomainEndpointOptionsOutputReference;

new OpensearchDomainDomainEndpointOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">resetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">resetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">resetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">resetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```java
public void resetCustomEndpoint()
```

##### `resetCustomEndpointCertificateArn` <a name="resetCustomEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```java
public void resetCustomEndpointCertificateArn()
```

##### `resetCustomEndpointEnabled` <a name="resetCustomEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```java
public void resetCustomEndpointEnabled()
```

##### `resetEnforceHttps` <a name="resetEnforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```java
public void resetEnforceHttps()
```

##### `resetTlsSecurityPolicy` <a name="resetTlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```java
public void resetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">customEndpointCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">customEndpointEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">customEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforceHttpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tlsSecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint">customEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforceHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customEndpointCertificateArnInput`<sup>Optional</sup> <a name="customEndpointCertificateArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```java
public java.lang.String getCustomEndpointCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `customEndpointEnabledInput`<sup>Optional</sup> <a name="customEndpointEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```java
public java.lang.Object getCustomEndpointEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```java
public java.lang.String getCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `enforceHttpsInput`<sup>Optional</sup> <a name="enforceHttpsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```java
public java.lang.Object getEnforceHttpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsSecurityPolicyInput`<sup>Optional</sup> <a name="tlsSecurityPolicyInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```java
public java.lang.String getTlsSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```java
public java.lang.String getCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="customEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```java
public java.lang.String getCustomEndpointCertificateArn();
```

- *Type:* java.lang.String

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="customEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```java
public java.lang.Object getCustomEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceHttps`<sup>Required</sup> <a name="enforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```java
public java.lang.Object getEnforceHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="tlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```java
public java.lang.String getTlsSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainDomainEndpointOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---


### OpensearchDomainEbsOptionsOutputReference <a name="OpensearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainEbsOptionsOutputReference;

new OpensearchDomainEbsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput">ebsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsEnabledInput`<sup>Optional</sup> <a name="ebsEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```java
public java.lang.Object getEbsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```java
public java.lang.Object getEbsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainEbsOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---


### OpensearchDomainEncryptAtRestOutputReference <a name="OpensearchDomainEncryptAtRestOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainEncryptAtRestOutputReference;

new OpensearchDomainEncryptAtRestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue"></a>

```java
public OpensearchDomainEncryptAtRest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---


### OpensearchDomainLogPublishingOptionsList <a name="OpensearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainLogPublishingOptionsList;

new OpensearchDomainLogPublishingOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get"></a>

```java
public OpensearchDomainLogPublishingOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>>

---


### OpensearchDomainLogPublishingOptionsOutputReference <a name="OpensearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainLogPublishingOptionsOutputReference;

new OpensearchDomainLogPublishingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput"></a>

```java
public java.lang.String getCloudwatchLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a> OR com.hashicorp.cdktf.IResolvable

---


### OpensearchDomainNodeToNodeEncryptionOutputReference <a name="OpensearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainNodeToNodeEncryptionOutputReference;

new OpensearchDomainNodeToNodeEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```java
public OpensearchDomainNodeToNodeEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---


### OpensearchDomainSnapshotOptionsOutputReference <a name="OpensearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainSnapshotOptionsOutputReference;

new OpensearchDomainSnapshotOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">automatedSnapshotStartHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotStartHourInput`<sup>Optional</sup> <a name="automatedSnapshotStartHourInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```java
public java.lang.Number getAutomatedSnapshotStartHourInput();
```

- *Type:* java.lang.Number

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```java
public java.lang.Number getAutomatedSnapshotStartHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainSnapshotOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---


### OpensearchDomainTimeoutsOutputReference <a name="OpensearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainTimeoutsOutputReference;

new OpensearchDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### OpensearchDomainVpcOptionsOutputReference <a name="OpensearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain.OpensearchDomainVpcOptionsOutputReference;

new OpensearchDomainVpcOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainVpcOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---



