# `dataAwsIamPolicyDocument` Submodule <a name="`dataAwsIamPolicyDocument` Submodule" id="@cdktf/provider-aws.dataAwsIamPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamPolicyDocument <a name="DataAwsIamPolicyDocument" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document aws_iam_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocument;

DataAwsIamPolicyDocument.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .overrideJson(java.lang.String)
//  .overridePolicyDocuments(java.util.List<java.lang.String>)
//  .policyId(java.lang.String)
//  .sourceJson(java.lang.String)
//  .sourcePolicyDocuments(java.util.List<java.lang.String>)
//  .statement(IResolvable)
//  .statement(java.util.List<DataAwsIamPolicyDocumentStatement>)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overrideJson">overrideJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overridePolicyDocuments">overridePolicyDocuments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourceJson">sourceJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourcePolicyDocuments">sourcePolicyDocuments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.statement">statement</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>></code> | statement block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideJson`<sup>Optional</sup> <a name="overrideJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overrideJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}.

---

##### `overridePolicyDocuments`<sup>Optional</sup> <a name="overridePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overridePolicyDocuments"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}.

---

##### `sourceJson`<sup>Optional</sup> <a name="sourceJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourceJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}.

---

##### `sourcePolicyDocuments`<sup>Optional</sup> <a name="sourcePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourcePolicyDocuments"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}.

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.statement"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>>

statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#statement DataAwsIamPolicyDocument#statement}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement">putStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideJson">resetOverrideJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverridePolicyDocuments">resetOverridePolicyDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourceJson">resetSourceJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourcePolicyDocuments">resetSourcePolicyDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetStatement">resetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putStatement` <a name="putStatement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement"></a>

```java
public void putStatement(IResolvable OR java.util.List<DataAwsIamPolicyDocumentStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetId"></a>

```java
public void resetId()
```

##### `resetOverrideJson` <a name="resetOverrideJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideJson"></a>

```java
public void resetOverrideJson()
```

##### `resetOverridePolicyDocuments` <a name="resetOverridePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverridePolicyDocuments"></a>

```java
public void resetOverridePolicyDocuments()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetSourceJson` <a name="resetSourceJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourceJson"></a>

```java
public void resetSourceJson()
```

##### `resetSourcePolicyDocuments` <a name="resetSourcePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourcePolicyDocuments"></a>

```java
public void resetSourcePolicyDocuments()
```

##### `resetStatement` <a name="resetStatement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetStatement"></a>

```java
public void resetStatement()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocument;

DataAwsIamPolicyDocument.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocument;

DataAwsIamPolicyDocument.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocument;

DataAwsIamPolicyDocument.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statement">statement</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList">DataAwsIamPolicyDocumentStatementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJsonInput">overrideJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocumentsInput">overridePolicyDocumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJsonInput">sourceJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocumentsInput">sourcePolicyDocumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statementInput">statementInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJson">overrideJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocuments">overridePolicyDocuments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJson">sourceJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocuments">sourcePolicyDocuments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statement"></a>

```java
public DataAwsIamPolicyDocumentStatementList getStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList">DataAwsIamPolicyDocumentStatementList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `overrideJsonInput`<sup>Optional</sup> <a name="overrideJsonInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJsonInput"></a>

```java
public java.lang.String getOverrideJsonInput();
```

- *Type:* java.lang.String

---

##### `overridePolicyDocumentsInput`<sup>Optional</sup> <a name="overridePolicyDocumentsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocumentsInput"></a>

```java
public java.util.List<java.lang.String> getOverridePolicyDocumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `sourceJsonInput`<sup>Optional</sup> <a name="sourceJsonInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJsonInput"></a>

```java
public java.lang.String getSourceJsonInput();
```

- *Type:* java.lang.String

---

##### `sourcePolicyDocumentsInput`<sup>Optional</sup> <a name="sourcePolicyDocumentsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocumentsInput"></a>

```java
public java.util.List<java.lang.String> getSourcePolicyDocumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statementInput"></a>

```java
public java.lang.Object getStatementInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `overrideJson`<sup>Required</sup> <a name="overrideJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJson"></a>

```java
public java.lang.String getOverrideJson();
```

- *Type:* java.lang.String

---

##### `overridePolicyDocuments`<sup>Required</sup> <a name="overridePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocuments"></a>

```java
public java.util.List<java.lang.String> getOverridePolicyDocuments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `sourceJson`<sup>Required</sup> <a name="sourceJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJson"></a>

```java
public java.lang.String getSourceJson();
```

- *Type:* java.lang.String

---

##### `sourcePolicyDocuments`<sup>Required</sup> <a name="sourcePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocuments"></a>

```java
public java.util.List<java.lang.String> getSourcePolicyDocuments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamPolicyDocumentConfig <a name="DataAwsIamPolicyDocumentConfig" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentConfig;

DataAwsIamPolicyDocumentConfig.builder()
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
//  .id(java.lang.String)
//  .overrideJson(java.lang.String)
//  .overridePolicyDocuments(java.util.List<java.lang.String>)
//  .policyId(java.lang.String)
//  .sourceJson(java.lang.String)
//  .sourcePolicyDocuments(java.util.List<java.lang.String>)
//  .statement(IResolvable)
//  .statement(java.util.List<DataAwsIamPolicyDocumentStatement>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overrideJson">overrideJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overridePolicyDocuments">overridePolicyDocuments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourceJson">sourceJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourcePolicyDocuments">sourcePolicyDocuments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.statement">statement</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>></code> | statement block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideJson`<sup>Optional</sup> <a name="overrideJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overrideJson"></a>

```java
public java.lang.String getOverrideJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}.

---

##### `overridePolicyDocuments`<sup>Optional</sup> <a name="overridePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overridePolicyDocuments"></a>

```java
public java.util.List<java.lang.String> getOverridePolicyDocuments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}.

---

##### `sourceJson`<sup>Optional</sup> <a name="sourceJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourceJson"></a>

```java
public java.lang.String getSourceJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}.

---

##### `sourcePolicyDocuments`<sup>Optional</sup> <a name="sourcePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourcePolicyDocuments"></a>

```java
public java.util.List<java.lang.String> getSourcePolicyDocuments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}.

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.statement"></a>

```java
public java.lang.Object getStatement();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>>

statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#statement DataAwsIamPolicyDocument#statement}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}.

---

### DataAwsIamPolicyDocumentStatement <a name="DataAwsIamPolicyDocumentStatement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatement;

DataAwsIamPolicyDocumentStatement.builder()
//  .actions(java.util.List<java.lang.String>)
//  .condition(IResolvable)
//  .condition(java.util.List<DataAwsIamPolicyDocumentStatementCondition>)
//  .effect(java.lang.String)
//  .notActions(java.util.List<java.lang.String>)
//  .notPrincipals(IResolvable)
//  .notPrincipals(java.util.List<DataAwsIamPolicyDocumentStatementNotPrincipals>)
//  .notResources(java.util.List<java.lang.String>)
//  .principals(IResolvable)
//  .principals(java.util.List<DataAwsIamPolicyDocumentStatementPrincipals>)
//  .resources(java.util.List<java.lang.String>)
//  .sid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#actions DataAwsIamPolicyDocument#actions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#effect DataAwsIamPolicyDocument#effect}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notActions">notActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notPrincipals">notPrincipals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>></code> | not_principals block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notResources">notResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.principals">principals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>></code> | principals block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#resources DataAwsIamPolicyDocument#resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.sid">sid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#sid DataAwsIamPolicyDocument#sid}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#actions DataAwsIamPolicyDocument#actions}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#condition DataAwsIamPolicyDocument#condition}

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#effect DataAwsIamPolicyDocument#effect}.

---

##### `notActions`<sup>Optional</sup> <a name="notActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notActions"></a>

```java
public java.util.List<java.lang.String> getNotActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}.

---

##### `notPrincipals`<sup>Optional</sup> <a name="notPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notPrincipals"></a>

```java
public java.lang.Object getNotPrincipals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>>

not_principals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_principals DataAwsIamPolicyDocument#not_principals}

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notResources"></a>

```java
public java.util.List<java.lang.String> getNotResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.principals"></a>

```java
public java.lang.Object getPrincipals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>>

principals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#principals DataAwsIamPolicyDocument#principals}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#resources DataAwsIamPolicyDocument#resources}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#sid DataAwsIamPolicyDocument#sid}.

---

### DataAwsIamPolicyDocumentStatementCondition <a name="DataAwsIamPolicyDocumentStatementCondition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementCondition;

DataAwsIamPolicyDocumentStatementCondition.builder()
    .test(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .variable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.test">test</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#test DataAwsIamPolicyDocument#test}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#values DataAwsIamPolicyDocument#values}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.variable">variable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#variable DataAwsIamPolicyDocument#variable}. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.test"></a>

```java
public java.lang.String getTest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#test DataAwsIamPolicyDocument#test}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#values DataAwsIamPolicyDocument#values}.

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#variable DataAwsIamPolicyDocument#variable}.

---

### DataAwsIamPolicyDocumentStatementNotPrincipals <a name="DataAwsIamPolicyDocumentStatementNotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementNotPrincipals;

DataAwsIamPolicyDocumentStatementNotPrincipals.builder()
    .identifiers(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}. |

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}.

---

### DataAwsIamPolicyDocumentStatementPrincipals <a name="DataAwsIamPolicyDocumentStatementPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementPrincipals;

DataAwsIamPolicyDocumentStatementPrincipals.builder()
    .identifiers(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}. |

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamPolicyDocumentStatementConditionList <a name="DataAwsIamPolicyDocumentStatementConditionList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementConditionList;

new DataAwsIamPolicyDocumentStatementConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get"></a>

```java
public DataAwsIamPolicyDocumentStatementConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>>

---


### DataAwsIamPolicyDocumentStatementConditionOutputReference <a name="DataAwsIamPolicyDocumentStatementConditionOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementConditionOutputReference;

new DataAwsIamPolicyDocumentStatementConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.testInput">testInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.test">test</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testInput`<sup>Optional</sup> <a name="testInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.testInput"></a>

```java
public java.lang.String getTestInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.test"></a>

```java
public java.lang.String getTest();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsIamPolicyDocumentStatementList <a name="DataAwsIamPolicyDocumentStatementList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementList;

new DataAwsIamPolicyDocumentStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get"></a>

```java
public DataAwsIamPolicyDocumentStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>>

---


### DataAwsIamPolicyDocumentStatementNotPrincipalsList <a name="DataAwsIamPolicyDocumentStatementNotPrincipalsList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementNotPrincipalsList;

new DataAwsIamPolicyDocumentStatementNotPrincipalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get"></a>

```java
public DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>>

---


### DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference <a name="DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference;

new DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsIamPolicyDocumentStatementOutputReference <a name="DataAwsIamPolicyDocumentStatementOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementOutputReference;

new DataAwsIamPolicyDocumentStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals">putNotPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals">putPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotActions">resetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotPrincipals">resetNotPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetSid">resetSid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<DataAwsIamPolicyDocumentStatementCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>>

---

##### `putNotPrincipals` <a name="putNotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals"></a>

```java
public void putNotPrincipals(IResolvable OR java.util.List<DataAwsIamPolicyDocumentStatementNotPrincipals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>>

---

##### `putPrincipals` <a name="putPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals"></a>

```java
public void putPrincipals(IResolvable OR java.util.List<DataAwsIamPolicyDocumentStatementPrincipals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>>

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetNotActions` <a name="resetNotActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotActions"></a>

```java
public void resetNotActions()
```

##### `resetNotPrincipals` <a name="resetNotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotPrincipals"></a>

```java
public void resetNotPrincipals()
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotResources"></a>

```java
public void resetNotResources()
```

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetPrincipals"></a>

```java
public void resetPrincipals()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetSid` <a name="resetSid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetSid"></a>

```java
public void resetSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList">DataAwsIamPolicyDocumentStatementConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipals">notPrincipals</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList">DataAwsIamPolicyDocumentStatementNotPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principals">principals</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList">DataAwsIamPolicyDocumentStatementPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActionsInput">notActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipalsInput">notPrincipalsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResourcesInput">notResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principalsInput">principalsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sidInput">sidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActions">notActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResources">notResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sid">sid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.condition"></a>

```java
public DataAwsIamPolicyDocumentStatementConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList">DataAwsIamPolicyDocumentStatementConditionList</a>

---

##### `notPrincipals`<sup>Required</sup> <a name="notPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipals"></a>

```java
public DataAwsIamPolicyDocumentStatementNotPrincipalsList getNotPrincipals();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList">DataAwsIamPolicyDocumentStatementNotPrincipalsList</a>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principals"></a>

```java
public DataAwsIamPolicyDocumentStatementPrincipalsList getPrincipals();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList">DataAwsIamPolicyDocumentStatementPrincipalsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>>

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `notActionsInput`<sup>Optional</sup> <a name="notActionsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActionsInput"></a>

```java
public java.util.List<java.lang.String> getNotActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notPrincipalsInput`<sup>Optional</sup> <a name="notPrincipalsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipalsInput"></a>

```java
public java.lang.Object getNotPrincipalsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>>

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResourcesInput"></a>

```java
public java.util.List<java.lang.String> getNotResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principalsInput"></a>

```java
public java.lang.Object getPrincipalsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sidInput`<sup>Optional</sup> <a name="sidInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sidInput"></a>

```java
public java.lang.String getSidInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `notActions`<sup>Required</sup> <a name="notActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActions"></a>

```java
public java.util.List<java.lang.String> getNotActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResources"></a>

```java
public java.util.List<java.lang.String> getNotResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsIamPolicyDocumentStatementPrincipalsList <a name="DataAwsIamPolicyDocumentStatementPrincipalsList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementPrincipalsList;

new DataAwsIamPolicyDocumentStatementPrincipalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get"></a>

```java
public DataAwsIamPolicyDocumentStatementPrincipalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>>

---


### DataAwsIamPolicyDocumentStatementPrincipalsOutputReference <a name="DataAwsIamPolicyDocumentStatementPrincipalsOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_iam_policy_document.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference;

new DataAwsIamPolicyDocumentStatementPrincipalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a> OR com.hashicorp.cdktf.IResolvable

---



