# `sagemakerFeatureGroup` Submodule <a name="`sagemakerFeatureGroup` Submodule" id="@cdktf/provider-aws.sagemakerFeatureGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFeatureGroup <a name="SagemakerFeatureGroup" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group aws_sagemaker_feature_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroup;

SagemakerFeatureGroup.Builder.create(Construct scope, java.lang.String id)
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
    .eventTimeFeatureName(java.lang.String)
    .featureDefinition(IResolvable)
    .featureDefinition(java.util.List<SagemakerFeatureGroupFeatureDefinition>)
    .featureGroupName(java.lang.String)
    .recordIdentifierFeatureName(java.lang.String)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .offlineStoreConfig(SagemakerFeatureGroupOfflineStoreConfig)
//  .onlineStoreConfig(SagemakerFeatureGroupOnlineStoreConfig)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .throughputConfig(SagemakerFeatureGroupThroughputConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.eventTimeFeatureName">eventTimeFeatureName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureDefinition">featureDefinition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>></code> | feature_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureGroupName">featureGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.recordIdentifierFeatureName">recordIdentifierFeatureName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | offline_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | online_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.throughputConfig">throughputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | throughput_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventTimeFeatureName`<sup>Required</sup> <a name="eventTimeFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.eventTimeFeatureName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}.

---

##### `featureDefinition`<sup>Required</sup> <a name="featureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureDefinition"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>>

feature_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_definition SagemakerFeatureGroup#feature_definition}

---

##### `featureGroupName`<sup>Required</sup> <a name="featureGroupName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}.

---

##### `recordIdentifierFeatureName`<sup>Required</sup> <a name="recordIdentifierFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.recordIdentifierFeatureName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offlineStoreConfig`<sup>Optional</sup> <a name="offlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.offlineStoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

offline_store_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}

---

##### `onlineStoreConfig`<sup>Optional</sup> <a name="onlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.onlineStoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

online_store_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#region SagemakerFeatureGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}.

---

##### `throughputConfig`<sup>Optional</sup> <a name="throughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.throughputConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

throughput_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition">putFeatureDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig">putOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig">putOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig">putThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig">resetOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig">resetOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig">resetThroughputConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeatureDefinition` <a name="putFeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition"></a>

```java
public void putFeatureDefinition(IResolvable OR java.util.List<SagemakerFeatureGroupFeatureDefinition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>>

---

##### `putOfflineStoreConfig` <a name="putOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig"></a>

```java
public void putOfflineStoreConfig(SagemakerFeatureGroupOfflineStoreConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `putOnlineStoreConfig` <a name="putOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig"></a>

```java
public void putOnlineStoreConfig(SagemakerFeatureGroupOnlineStoreConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `putThroughputConfig` <a name="putThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig"></a>

```java
public void putThroughputConfig(SagemakerFeatureGroupThroughputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetId"></a>

```java
public void resetId()
```

##### `resetOfflineStoreConfig` <a name="resetOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig"></a>

```java
public void resetOfflineStoreConfig()
```

##### `resetOnlineStoreConfig` <a name="resetOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig"></a>

```java
public void resetOnlineStoreConfig()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetThroughputConfig` <a name="resetThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig"></a>

```java
public void resetThroughputConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerFeatureGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroup;

SagemakerFeatureGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroup;

SagemakerFeatureGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroup;

SagemakerFeatureGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroup;

SagemakerFeatureGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerFeatureGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SagemakerFeatureGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerFeatureGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerFeatureGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerFeatureGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinition">featureDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList">SagemakerFeatureGroupFeatureDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig">throughputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput">eventTimeFeatureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionInput">featureDefinitionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput">featureGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput">offlineStoreConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput">onlineStoreConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput">recordIdentifierFeatureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput">throughputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName">eventTimeFeatureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName">featureGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName">recordIdentifierFeatureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `featureDefinition`<sup>Required</sup> <a name="featureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinition"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionList getFeatureDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList">SagemakerFeatureGroupFeatureDefinitionList</a>

---

##### `offlineStoreConfig`<sup>Required</sup> <a name="offlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigOutputReference getOfflineStoreConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a>

---

##### `onlineStoreConfig`<sup>Required</sup> <a name="onlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigOutputReference getOnlineStoreConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a>

---

##### `throughputConfig`<sup>Required</sup> <a name="throughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig"></a>

```java
public SagemakerFeatureGroupThroughputConfigOutputReference getThroughputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventTimeFeatureNameInput`<sup>Optional</sup> <a name="eventTimeFeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput"></a>

```java
public java.lang.String getEventTimeFeatureNameInput();
```

- *Type:* java.lang.String

---

##### `featureDefinitionInput`<sup>Optional</sup> <a name="featureDefinitionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionInput"></a>

```java
public java.lang.Object getFeatureDefinitionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>>

---

##### `featureGroupNameInput`<sup>Optional</sup> <a name="featureGroupNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput"></a>

```java
public java.lang.String getFeatureGroupNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `offlineStoreConfigInput`<sup>Optional</sup> <a name="offlineStoreConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfig getOfflineStoreConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `onlineStoreConfigInput`<sup>Optional</sup> <a name="onlineStoreConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfig getOnlineStoreConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `recordIdentifierFeatureNameInput`<sup>Optional</sup> <a name="recordIdentifierFeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput"></a>

```java
public java.lang.String getRecordIdentifierFeatureNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputConfigInput`<sup>Optional</sup> <a name="throughputConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput"></a>

```java
public SagemakerFeatureGroupThroughputConfig getThroughputConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventTimeFeatureName`<sup>Required</sup> <a name="eventTimeFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName"></a>

```java
public java.lang.String getEventTimeFeatureName();
```

- *Type:* java.lang.String

---

##### `featureGroupName`<sup>Required</sup> <a name="featureGroupName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName"></a>

```java
public java.lang.String getFeatureGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recordIdentifierFeatureName`<sup>Required</sup> <a name="recordIdentifierFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName"></a>

```java
public java.lang.String getRecordIdentifierFeatureName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFeatureGroupConfig <a name="SagemakerFeatureGroupConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupConfig;

SagemakerFeatureGroupConfig.builder()
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
    .eventTimeFeatureName(java.lang.String)
    .featureDefinition(IResolvable)
    .featureDefinition(java.util.List<SagemakerFeatureGroupFeatureDefinition>)
    .featureGroupName(java.lang.String)
    .recordIdentifierFeatureName(java.lang.String)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .offlineStoreConfig(SagemakerFeatureGroupOfflineStoreConfig)
//  .onlineStoreConfig(SagemakerFeatureGroupOnlineStoreConfig)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .throughputConfig(SagemakerFeatureGroupThroughputConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName">eventTimeFeatureName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinition">featureDefinition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>></code> | feature_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName">featureGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName">recordIdentifierFeatureName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | offline_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | online_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig">throughputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | throughput_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventTimeFeatureName`<sup>Required</sup> <a name="eventTimeFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName"></a>

```java
public java.lang.String getEventTimeFeatureName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}.

---

##### `featureDefinition`<sup>Required</sup> <a name="featureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinition"></a>

```java
public java.lang.Object getFeatureDefinition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>>

feature_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_definition SagemakerFeatureGroup#feature_definition}

---

##### `featureGroupName`<sup>Required</sup> <a name="featureGroupName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName"></a>

```java
public java.lang.String getFeatureGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}.

---

##### `recordIdentifierFeatureName`<sup>Required</sup> <a name="recordIdentifierFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName"></a>

```java
public java.lang.String getRecordIdentifierFeatureName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offlineStoreConfig`<sup>Optional</sup> <a name="offlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfig getOfflineStoreConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

offline_store_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}

---

##### `onlineStoreConfig`<sup>Optional</sup> <a name="onlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfig getOnlineStoreConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

online_store_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#region SagemakerFeatureGroup#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}.

---

##### `throughputConfig`<sup>Optional</sup> <a name="throughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig"></a>

```java
public SagemakerFeatureGroupThroughputConfig getThroughputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

throughput_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}

---

### SagemakerFeatureGroupFeatureDefinition <a name="SagemakerFeatureGroupFeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupFeatureDefinition;

SagemakerFeatureGroupFeatureDefinition.builder()
//  .collectionConfig(SagemakerFeatureGroupFeatureDefinitionCollectionConfig)
//  .collectionType(java.lang.String)
//  .featureName(java.lang.String)
//  .featureType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionConfig">collectionConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a></code> | collection_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionType">collectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#collection_type SagemakerFeatureGroup#collection_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureName">featureName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureType">featureType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}. |

---

##### `collectionConfig`<sup>Optional</sup> <a name="collectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionConfig"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfig getCollectionConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

collection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#collection_config SagemakerFeatureGroup#collection_config}

---

##### `collectionType`<sup>Optional</sup> <a name="collectionType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionType"></a>

```java
public java.lang.String getCollectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#collection_type SagemakerFeatureGroup#collection_type}.

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}.

---

##### `featureType`<sup>Optional</sup> <a name="featureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}.

---

### SagemakerFeatureGroupFeatureDefinitionCollectionConfig <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupFeatureDefinitionCollectionConfig;

SagemakerFeatureGroupFeatureDefinitionCollectionConfig.builder()
//  .vectorConfig(SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a></code> | vector_config block. |

---

##### `vectorConfig`<sup>Optional</sup> <a name="vectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig.property.vectorConfig"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig getVectorConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#vector_config SagemakerFeatureGroup#vector_config}

---

### SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig;

SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig.builder()
//  .dimension(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig.property.dimension">dimension</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#dimension SagemakerFeatureGroup#dimension}. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig.property.dimension"></a>

```java
public java.lang.Number getDimension();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#dimension SagemakerFeatureGroup#dimension}.

---

### SagemakerFeatureGroupOfflineStoreConfig <a name="SagemakerFeatureGroupOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOfflineStoreConfig;

SagemakerFeatureGroupOfflineStoreConfig.builder()
    .s3StorageConfig(SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig)
//  .dataCatalogConfig(SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig)
//  .disableGlueTableCreation(java.lang.Boolean)
//  .disableGlueTableCreation(IResolvable)
//  .tableFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig">s3StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | s3_storage_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | data_catalog_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation">disableGlueTableCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat">tableFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}. |

---

##### `s3StorageConfig`<sup>Required</sup> <a name="s3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig getS3StorageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

s3_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}

---

##### `dataCatalogConfig`<sup>Optional</sup> <a name="dataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig getDataCatalogConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}

---

##### `disableGlueTableCreation`<sup>Optional</sup> <a name="disableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation"></a>

```java
public java.lang.Object getDisableGlueTableCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}.

---

##### `tableFormat`<sup>Optional</sup> <a name="tableFormat" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat"></a>

```java
public java.lang.String getTableFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}.

---

### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;

SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.builder()
//  .catalog(java.lang.String)
//  .database(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}.

---

### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;

SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.builder()
    .s3Uri(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .resolvedOutputS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.resolvedOutputS3Uri">resolvedOutputS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#resolved_output_s3_uri SagemakerFeatureGroup#resolved_output_s3_uri}. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

##### `resolvedOutputS3Uri`<sup>Optional</sup> <a name="resolvedOutputS3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.resolvedOutputS3Uri"></a>

```java
public java.lang.String getResolvedOutputS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#resolved_output_s3_uri SagemakerFeatureGroup#resolved_output_s3_uri}.

---

### SagemakerFeatureGroupOnlineStoreConfig <a name="SagemakerFeatureGroupOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOnlineStoreConfig;

SagemakerFeatureGroupOnlineStoreConfig.builder()
//  .enableOnlineStore(java.lang.Boolean)
//  .enableOnlineStore(IResolvable)
//  .securityConfig(SagemakerFeatureGroupOnlineStoreConfigSecurityConfig)
//  .storageType(java.lang.String)
//  .ttlDuration(SagemakerFeatureGroupOnlineStoreConfigTtlDuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore">enableOnlineStore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | security_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration">ttlDuration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | ttl_duration block. |

---

##### `enableOnlineStore`<sup>Optional</sup> <a name="enableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore"></a>

```java
public java.lang.Object getEnableOnlineStore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}.

---

##### `securityConfig`<sup>Optional</sup> <a name="securityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfig getSecurityConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}.

---

##### `ttlDuration`<sup>Optional</sup> <a name="ttlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigTtlDuration getTtlDuration();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

ttl_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#ttl_duration SagemakerFeatureGroup#ttl_duration}

---

### SagemakerFeatureGroupOnlineStoreConfigSecurityConfig <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;

SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.builder()
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

### SagemakerFeatureGroupOnlineStoreConfigTtlDuration <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOnlineStoreConfigTtlDuration;

SagemakerFeatureGroupOnlineStoreConfigTtlDuration.builder()
//  .unit(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}.

---

### SagemakerFeatureGroupThroughputConfig <a name="SagemakerFeatureGroupThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupThroughputConfig;

SagemakerFeatureGroupThroughputConfig.builder()
//  .provisionedReadCapacityUnits(java.lang.Number)
//  .provisionedWriteCapacityUnits(java.lang.Number)
//  .throughputMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits">provisionedReadCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits">provisionedWriteCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}. |

---

##### `provisionedReadCapacityUnits`<sup>Optional</sup> <a name="provisionedReadCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits"></a>

```java
public java.lang.Number getProvisionedReadCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}.

---

##### `provisionedWriteCapacityUnits`<sup>Optional</sup> <a name="provisionedWriteCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits"></a>

```java
public java.lang.Number getProvisionedWriteCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}.

---

##### `throughputMode`<sup>Optional</sup> <a name="throughputMode" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode"></a>

```java
public java.lang.String getThroughputMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference;

new SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.putVectorConfig">putVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resetVectorConfig">resetVectorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVectorConfig` <a name="putVectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.putVectorConfig"></a>

```java
public void putVectorConfig(SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

---

##### `resetVectorConfig` <a name="resetVectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resetVectorConfig"></a>

```java
public void resetVectorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfigInput">vectorConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vectorConfig`<sup>Required</sup> <a name="vectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfig"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference getVectorConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference</a>

---

##### `vectorConfigInput`<sup>Optional</sup> <a name="vectorConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfigInput"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig getVectorConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

---


### SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference;

new SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resetDimension">resetDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resetDimension"></a>

```java
public void resetDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimension">dimension</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimensionInput"></a>

```java
public java.lang.Number getDimensionInput();
```

- *Type:* java.lang.Number

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimension"></a>

```java
public java.lang.Number getDimension();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

---


### SagemakerFeatureGroupFeatureDefinitionList <a name="SagemakerFeatureGroupFeatureDefinitionList" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupFeatureDefinitionList;

new SagemakerFeatureGroupFeatureDefinitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>>

---


### SagemakerFeatureGroupFeatureDefinitionOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupFeatureDefinitionOutputReference;

new SagemakerFeatureGroupFeatureDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.putCollectionConfig">putCollectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionConfig">resetCollectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionType">resetCollectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureName">resetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureType">resetFeatureType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCollectionConfig` <a name="putCollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.putCollectionConfig"></a>

```java
public void putCollectionConfig(SagemakerFeatureGroupFeatureDefinitionCollectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.putCollectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

---

##### `resetCollectionConfig` <a name="resetCollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionConfig"></a>

```java
public void resetCollectionConfig()
```

##### `resetCollectionType` <a name="resetCollectionType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionType"></a>

```java
public void resetCollectionType()
```

##### `resetFeatureName` <a name="resetFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureName"></a>

```java
public void resetFeatureName()
```

##### `resetFeatureType` <a name="resetFeatureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureType"></a>

```java
public void resetFeatureType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfig">collectionConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfigInput">collectionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionTypeInput">collectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureNameInput">featureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureTypeInput">featureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionType">collectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureName">featureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureType">featureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionConfig`<sup>Required</sup> <a name="collectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfig"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference getCollectionConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference</a>

---

##### `collectionConfigInput`<sup>Optional</sup> <a name="collectionConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfigInput"></a>

```java
public SagemakerFeatureGroupFeatureDefinitionCollectionConfig getCollectionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

---

##### `collectionTypeInput`<sup>Optional</sup> <a name="collectionTypeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionTypeInput"></a>

```java
public java.lang.String getCollectionTypeInput();
```

- *Type:* java.lang.String

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureNameInput"></a>

```java
public java.lang.String getFeatureNameInput();
```

- *Type:* java.lang.String

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureTypeInput"></a>

```java
public java.lang.String getFeatureTypeInput();
```

- *Type:* java.lang.String

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionType"></a>

```java
public java.lang.String getCollectionType();
```

- *Type:* java.lang.String

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition">SagemakerFeatureGroupFeatureDefinition</a>

---


### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference;

new SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOfflineStoreConfigOutputReference;

new SagemakerFeatureGroupOfflineStoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig">putDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig">putS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig">resetDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation">resetDisableGlueTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat">resetTableFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCatalogConfig` <a name="putDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig"></a>

```java
public void putDataCatalogConfig(SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `putS3StorageConfig` <a name="putS3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig"></a>

```java
public void putS3StorageConfig(SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `resetDataCatalogConfig` <a name="resetDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig"></a>

```java
public void resetDataCatalogConfig()
```

##### `resetDisableGlueTableCreation` <a name="resetDisableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation"></a>

```java
public void resetDisableGlueTableCreation()
```

##### `resetTableFormat` <a name="resetTableFormat" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat"></a>

```java
public void resetTableFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig">s3StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput">dataCatalogConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput">disableGlueTableCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput">s3StorageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput">tableFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation">disableGlueTableCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat">tableFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference getDataCatalogConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a>

---

##### `s3StorageConfig`<sup>Required</sup> <a name="s3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference getS3StorageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a>

---

##### `dataCatalogConfigInput`<sup>Optional</sup> <a name="dataCatalogConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig getDataCatalogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `disableGlueTableCreationInput`<sup>Optional</sup> <a name="disableGlueTableCreationInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput"></a>

```java
public java.lang.Object getDisableGlueTableCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `s3StorageConfigInput`<sup>Optional</sup> <a name="s3StorageConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig getS3StorageConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `tableFormatInput`<sup>Optional</sup> <a name="tableFormatInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput"></a>

```java
public java.lang.String getTableFormatInput();
```

- *Type:* java.lang.String

---

##### `disableGlueTableCreation`<sup>Required</sup> <a name="disableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation"></a>

```java
public java.lang.Object getDisableGlueTableCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableFormat`<sup>Required</sup> <a name="tableFormat" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat"></a>

```java
public java.lang.String getTableFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference;

new SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetResolvedOutputS3Uri">resetResolvedOutputS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetResolvedOutputS3Uri` <a name="resetResolvedOutputS3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetResolvedOutputS3Uri"></a>

```java
public void resetResolvedOutputS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3UriInput">resolvedOutputS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3Uri">resolvedOutputS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `resolvedOutputS3UriInput`<sup>Optional</sup> <a name="resolvedOutputS3UriInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3UriInput"></a>

```java
public java.lang.String getResolvedOutputS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `resolvedOutputS3Uri`<sup>Required</sup> <a name="resolvedOutputS3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3Uri"></a>

```java
public java.lang.String getResolvedOutputS3Uri();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOnlineStoreConfigOutputReference;

new SagemakerFeatureGroupOnlineStoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig">putSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration">putTtlDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore">resetEnableOnlineStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig">resetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration">resetTtlDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecurityConfig` <a name="putSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig"></a>

```java
public void putSecurityConfig(SagemakerFeatureGroupOnlineStoreConfigSecurityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `putTtlDuration` <a name="putTtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration"></a>

```java
public void putTtlDuration(SagemakerFeatureGroupOnlineStoreConfigTtlDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---

##### `resetEnableOnlineStore` <a name="resetEnableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore"></a>

```java
public void resetEnableOnlineStore()
```

##### `resetSecurityConfig` <a name="resetSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig"></a>

```java
public void resetSecurityConfig()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTtlDuration` <a name="resetTtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration"></a>

```java
public void resetTtlDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration">ttlDuration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput">enableOnlineStoreInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput">securityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput">ttlDurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore">enableOnlineStore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityConfig`<sup>Required</sup> <a name="securityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference getSecurityConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a>

---

##### `ttlDuration`<sup>Required</sup> <a name="ttlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference getTtlDuration();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a>

---

##### `enableOnlineStoreInput`<sup>Optional</sup> <a name="enableOnlineStoreInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput"></a>

```java
public java.lang.Object getEnableOnlineStoreInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityConfigInput`<sup>Optional</sup> <a name="securityConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfig getSecurityConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `ttlDurationInput`<sup>Optional</sup> <a name="ttlDurationInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigTtlDuration getTtlDurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---

##### `enableOnlineStore`<sup>Required</sup> <a name="enableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore"></a>

```java
public java.lang.Object getEnableOnlineStore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference;

new SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference;

new SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupOnlineStoreConfigTtlDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---


### SagemakerFeatureGroupThroughputConfigOutputReference <a name="SagemakerFeatureGroupThroughputConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_feature_group.SagemakerFeatureGroupThroughputConfigOutputReference;

new SagemakerFeatureGroupThroughputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits">resetProvisionedReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits">resetProvisionedWriteCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode">resetThroughputMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProvisionedReadCapacityUnits` <a name="resetProvisionedReadCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits"></a>

```java
public void resetProvisionedReadCapacityUnits()
```

##### `resetProvisionedWriteCapacityUnits` <a name="resetProvisionedWriteCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits"></a>

```java
public void resetProvisionedWriteCapacityUnits()
```

##### `resetThroughputMode` <a name="resetThroughputMode" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode"></a>

```java
public void resetThroughputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput">provisionedReadCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput">provisionedWriteCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput">throughputModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits">provisionedReadCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits">provisionedWriteCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `provisionedReadCapacityUnitsInput`<sup>Optional</sup> <a name="provisionedReadCapacityUnitsInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput"></a>

```java
public java.lang.Number getProvisionedReadCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `provisionedWriteCapacityUnitsInput`<sup>Optional</sup> <a name="provisionedWriteCapacityUnitsInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput"></a>

```java
public java.lang.Number getProvisionedWriteCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `throughputModeInput`<sup>Optional</sup> <a name="throughputModeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput"></a>

```java
public java.lang.String getThroughputModeInput();
```

- *Type:* java.lang.String

---

##### `provisionedReadCapacityUnits`<sup>Required</sup> <a name="provisionedReadCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits"></a>

```java
public java.lang.Number getProvisionedReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `provisionedWriteCapacityUnits`<sup>Required</sup> <a name="provisionedWriteCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits"></a>

```java
public java.lang.Number getProvisionedWriteCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `throughputMode`<sup>Required</sup> <a name="throughputMode" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode"></a>

```java
public java.lang.String getThroughputMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFeatureGroupThroughputConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---



