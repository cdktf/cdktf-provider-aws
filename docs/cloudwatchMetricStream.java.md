# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktf/provider-aws.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream aws_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStream;

CloudwatchMetricStream.Builder.create(Construct scope, java.lang.String id)
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
    .firehoseArn(java.lang.String)
    .outputFormat(java.lang.String)
    .roleArn(java.lang.String)
//  .excludeFilter(IResolvable)
//  .excludeFilter(java.util.List<CloudwatchMetricStreamExcludeFilter>)
//  .id(java.lang.String)
//  .includeFilter(IResolvable)
//  .includeFilter(java.util.List<CloudwatchMetricStreamIncludeFilter>)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .statisticsConfiguration(IResolvable)
//  .statisticsConfiguration(java.util.List<CloudwatchMetricStreamStatisticsConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudwatchMetricStreamTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.excludeFilter">excludeFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>></code> | exclude_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeFilter">includeFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>></code> | include_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.statisticsConfiguration">statisticsConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>></code> | statistics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.firehoseArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}.

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.outputFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}.

---

##### `excludeFilter`<sup>Optional</sup> <a name="excludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.excludeFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>>

exclude_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeFilter`<sup>Optional</sup> <a name="includeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>>

include_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}.

---

##### `statisticsConfiguration`<sup>Optional</sup> <a name="statisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.statisticsConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>>

statistics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter">putExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter">putIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration">putStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter">resetExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter">resetIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration">resetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putExcludeFilter` <a name="putExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter"></a>

```java
public void putExcludeFilter(IResolvable OR java.util.List<CloudwatchMetricStreamExcludeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>>

---

##### `putIncludeFilter` <a name="putIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter"></a>

```java
public void putIncludeFilter(IResolvable OR java.util.List<CloudwatchMetricStreamIncludeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>>

---

##### `putStatisticsConfiguration` <a name="putStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration"></a>

```java
public void putStatisticsConfiguration(IResolvable OR java.util.List<CloudwatchMetricStreamStatisticsConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts"></a>

```java
public void putTimeouts(CloudwatchMetricStreamTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

---

##### `resetExcludeFilter` <a name="resetExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter"></a>

```java
public void resetExcludeFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeFilter` <a name="resetIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter"></a>

```java
public void resetIncludeFilter()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetStatisticsConfiguration` <a name="resetStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration"></a>

```java
public void resetStatisticsConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStream;

CloudwatchMetricStream.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStream;

CloudwatchMetricStream.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStream;

CloudwatchMetricStream.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter">excludeFilter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter">includeFilter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">lastUpdateDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration">statisticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput">excludeFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">firehoseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput">includeFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput">statisticsConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `excludeFilter`<sup>Required</sup> <a name="excludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter"></a>

```java
public CloudwatchMetricStreamExcludeFilterList getExcludeFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a>

---

##### `includeFilter`<sup>Required</sup> <a name="includeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter"></a>

```java
public CloudwatchMetricStreamIncludeFilterList getIncludeFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a>

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```java
public java.lang.String getLastUpdateDate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `statisticsConfiguration`<sup>Required</sup> <a name="statisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration"></a>

```java
public CloudwatchMetricStreamStatisticsConfigurationList getStatisticsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts"></a>

```java
public CloudwatchMetricStreamTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a>

---

##### `excludeFilterInput`<sup>Optional</sup> <a name="excludeFilterInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput"></a>

```java
public java.lang.Object getExcludeFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>>

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```java
public java.lang.String getFirehoseArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeFilterInput`<sup>Optional</sup> <a name="includeFilterInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput"></a>

```java
public java.lang.Object getIncludeFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `statisticsConfigurationInput`<sup>Optional</sup> <a name="statisticsConfigurationInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput"></a>

```java
public java.lang.Object getStatisticsConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```java
public java.lang.String getFirehoseArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamConfig;

CloudwatchMetricStreamConfig.builder()
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
    .firehoseArn(java.lang.String)
    .outputFormat(java.lang.String)
    .roleArn(java.lang.String)
//  .excludeFilter(IResolvable)
//  .excludeFilter(java.util.List<CloudwatchMetricStreamExcludeFilter>)
//  .id(java.lang.String)
//  .includeFilter(IResolvable)
//  .includeFilter(java.util.List<CloudwatchMetricStreamIncludeFilter>)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .statisticsConfiguration(IResolvable)
//  .statisticsConfiguration(java.util.List<CloudwatchMetricStreamStatisticsConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudwatchMetricStreamTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">firehoseArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter">excludeFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>></code> | exclude_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter">includeFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>></code> | include_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration">statisticsConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>></code> | statistics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```java
public java.lang.String getFirehoseArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}.

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}.

---

##### `excludeFilter`<sup>Optional</sup> <a name="excludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter"></a>

```java
public java.lang.Object getExcludeFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>>

exclude_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeFilter`<sup>Optional</sup> <a name="includeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter"></a>

```java
public java.lang.Object getIncludeFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>>

include_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}.

---

##### `statisticsConfiguration`<sup>Optional</sup> <a name="statisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration"></a>

```java
public java.lang.Object getStatisticsConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>>

statistics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts"></a>

```java
public CloudwatchMetricStreamTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}

---

### CloudwatchMetricStreamExcludeFilter <a name="CloudwatchMetricStreamExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamExcludeFilter;

CloudwatchMetricStreamExcludeFilter.builder()
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamIncludeFilter <a name="CloudwatchMetricStreamIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamIncludeFilter;

CloudwatchMetricStreamIncludeFilter.builder()
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamStatisticsConfiguration <a name="CloudwatchMetricStreamStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamStatisticsConfiguration;

CloudwatchMetricStreamStatisticsConfiguration.builder()
    .additionalStatistics(java.util.List<java.lang.String>)
    .includeMetric(IResolvable)
    .includeMetric(java.util.List<CloudwatchMetricStreamStatisticsConfigurationIncludeMetric>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics">additionalStatistics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric">includeMetric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>></code> | include_metric block. |

---

##### `additionalStatistics`<sup>Required</sup> <a name="additionalStatistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics"></a>

```java
public java.util.List<java.lang.String> getAdditionalStatistics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}.

---

##### `includeMetric`<sup>Required</sup> <a name="includeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric"></a>

```java
public java.lang.Object getIncludeMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>>

include_metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_metric CloudwatchMetricStream#include_metric}

---

### CloudwatchMetricStreamStatisticsConfigurationIncludeMetric <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric;

CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamTimeouts <a name="CloudwatchMetricStreamTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamTimeouts;

CloudwatchMetricStreamTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFilterList <a name="CloudwatchMetricStreamExcludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamExcludeFilterList;

new CloudwatchMetricStreamExcludeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get"></a>

```java
public CloudwatchMetricStreamExcludeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>>

---


### CloudwatchMetricStreamExcludeFilterOutputReference <a name="CloudwatchMetricStreamExcludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamExcludeFilterOutputReference;

new CloudwatchMetricStreamExcludeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchMetricStreamIncludeFilterList <a name="CloudwatchMetricStreamIncludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamIncludeFilterList;

new CloudwatchMetricStreamIncludeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get"></a>

```java
public CloudwatchMetricStreamIncludeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>>

---


### CloudwatchMetricStreamIncludeFilterOutputReference <a name="CloudwatchMetricStreamIncludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamIncludeFilterOutputReference;

new CloudwatchMetricStreamIncludeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList;

new CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get"></a>

```java
public CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>>

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference;

new CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchMetricStreamStatisticsConfigurationList <a name="CloudwatchMetricStreamStatisticsConfigurationList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamStatisticsConfigurationList;

new CloudwatchMetricStreamStatisticsConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get"></a>

```java
public CloudwatchMetricStreamStatisticsConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>>

---


### CloudwatchMetricStreamStatisticsConfigurationOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamStatisticsConfigurationOutputReference;

new CloudwatchMetricStreamStatisticsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric">putIncludeMetric</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeMetric` <a name="putIncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric"></a>

```java
public void putIncludeMetric(IResolvable OR java.util.List<CloudwatchMetricStreamStatisticsConfigurationIncludeMetric> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric">includeMetric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput">additionalStatisticsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput">includeMetricInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics">additionalStatistics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeMetric`<sup>Required</sup> <a name="includeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric"></a>

```java
public CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList getIncludeMetric();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a>

---

##### `additionalStatisticsInput`<sup>Optional</sup> <a name="additionalStatisticsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalStatisticsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeMetricInput`<sup>Optional</sup> <a name="includeMetricInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput"></a>

```java
public java.lang.Object getIncludeMetricInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>>

---

##### `additionalStatistics`<sup>Required</sup> <a name="additionalStatistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics"></a>

```java
public java.util.List<java.lang.String> getAdditionalStatistics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchMetricStreamTimeoutsOutputReference <a name="CloudwatchMetricStreamTimeoutsOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_stream.CloudwatchMetricStreamTimeoutsOutputReference;

new CloudwatchMetricStreamTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



