# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktf/provider-aws.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition aws_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cur_report_definition.CurReportDefinition;

CurReportDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .additionalSchemaElements(java.util.List<java.lang.String>)
    .compression(java.lang.String)
    .format(java.lang.String)
    .reportName(java.lang.String)
    .s3Bucket(java.lang.String)
    .s3Region(java.lang.String)
    .timeUnit(java.lang.String)
//  .additionalArtifacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .refreshClosedReports(java.lang.Boolean)
//  .refreshClosedReports(IResolvable)
//  .reportVersioning(java.lang.String)
//  .s3Prefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalSchemaElements">additionalSchemaElements</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.compression">compression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportName">reportName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Region">s3Region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalArtifacts">additionalArtifacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.refreshClosedReports">refreshClosedReports</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportVersioning">reportVersioning</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Prefix">s3Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalSchemaElements`<sup>Required</sup> <a name="additionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalSchemaElements"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.compression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.format"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}.

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `s3Region`<sup>Required</sup> <a name="s3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.timeUnit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `additionalArtifacts`<sup>Optional</sup> <a name="additionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalArtifacts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshClosedReports`<sup>Optional</sup> <a name="refreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.refreshClosedReports"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `reportVersioning`<sup>Optional</sup> <a name="reportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportVersioning"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `s3Prefix`<sup>Optional</sup> <a name="s3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">resetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports">resetRefreshClosedReports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning">resetReportVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix">resetS3Prefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAdditionalArtifacts` <a name="resetAdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```java
public void resetAdditionalArtifacts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetRefreshClosedReports` <a name="resetRefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports"></a>

```java
public void resetRefreshClosedReports()
```

##### `resetReportVersioning` <a name="resetReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning"></a>

```java
public void resetReportVersioning()
```

##### `resetS3Prefix` <a name="resetS3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix"></a>

```java
public void resetS3Prefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cur_report_definition.CurReportDefinition;

CurReportDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cur_report_definition.CurReportDefinition;

CurReportDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cur_report_definition.CurReportDefinition;

CurReportDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">additionalArtifactsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">additionalSchemaElementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">refreshClosedReportsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput">reportNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput">reportVersioningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput">s3PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput">s3RegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput">timeUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts">additionalArtifacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">additionalSchemaElements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports">refreshClosedReports</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName">reportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning">reportVersioning</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix">s3Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region">s3Region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `additionalArtifactsInput`<sup>Optional</sup> <a name="additionalArtifactsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalArtifactsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalSchemaElementsInput`<sup>Optional</sup> <a name="additionalSchemaElementsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalSchemaElementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `refreshClosedReportsInput`<sup>Optional</sup> <a name="refreshClosedReportsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```java
public java.lang.Object getRefreshClosedReportsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reportNameInput`<sup>Optional</sup> <a name="reportNameInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```java
public java.lang.String getReportNameInput();
```

- *Type:* java.lang.String

---

##### `reportVersioningInput`<sup>Optional</sup> <a name="reportVersioningInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```java
public java.lang.String getReportVersioningInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3PrefixInput`<sup>Optional</sup> <a name="s3PrefixInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```java
public java.lang.String getS3PrefixInput();
```

- *Type:* java.lang.String

---

##### `s3RegionInput`<sup>Optional</sup> <a name="s3RegionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```java
public java.lang.String getS3RegionInput();
```

- *Type:* java.lang.String

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```java
public java.lang.String getTimeUnitInput();
```

- *Type:* java.lang.String

---

##### `additionalArtifacts`<sup>Required</sup> <a name="additionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```java
public java.util.List<java.lang.String> getAdditionalArtifacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalSchemaElements`<sup>Required</sup> <a name="additionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```java
public java.util.List<java.lang.String> getAdditionalSchemaElements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `refreshClosedReports`<sup>Required</sup> <a name="refreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```java
public java.lang.Object getRefreshClosedReports();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName"></a>

```java
public java.lang.String getReportName();
```

- *Type:* java.lang.String

---

##### `reportVersioning`<sup>Required</sup> <a name="reportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```java
public java.lang.String getReportVersioning();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```java
public java.lang.String getS3Prefix();
```

- *Type:* java.lang.String

---

##### `s3Region`<sup>Required</sup> <a name="s3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```java
public java.lang.String getS3Region();
```

- *Type:* java.lang.String

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cur_report_definition.CurReportDefinitionConfig;

CurReportDefinitionConfig.builder()
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
    .additionalSchemaElements(java.util.List<java.lang.String>)
    .compression(java.lang.String)
    .format(java.lang.String)
    .reportName(java.lang.String)
    .s3Bucket(java.lang.String)
    .s3Region(java.lang.String)
    .timeUnit(java.lang.String)
//  .additionalArtifacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .refreshClosedReports(java.lang.Boolean)
//  .refreshClosedReports(IResolvable)
//  .reportVersioning(java.lang.String)
//  .s3Prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">additionalSchemaElements</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression">compression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName">reportName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region">s3Region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">additionalArtifacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">refreshClosedReports</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">reportVersioning</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">s3Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalSchemaElements`<sup>Required</sup> <a name="additionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```java
public java.util.List<java.lang.String> getAdditionalSchemaElements();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}.

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```java
public java.lang.String getReportName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `s3Region`<sup>Required</sup> <a name="s3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```java
public java.lang.String getS3Region();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `additionalArtifacts`<sup>Optional</sup> <a name="additionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```java
public java.util.List<java.lang.String> getAdditionalArtifacts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshClosedReports`<sup>Optional</sup> <a name="refreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```java
public java.lang.Object getRefreshClosedReports();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `reportVersioning`<sup>Optional</sup> <a name="reportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```java
public java.lang.String getReportVersioning();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `s3Prefix`<sup>Optional</sup> <a name="s3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```java
public java.lang.String getS3Prefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---



