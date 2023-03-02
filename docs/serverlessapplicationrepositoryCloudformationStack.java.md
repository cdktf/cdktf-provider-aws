# `serverlessapplicationrepositoryCloudformationStack` Submodule <a name="`serverlessapplicationrepositoryCloudformationStack` Submodule" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessapplicationrepositoryCloudformationStack <a name="ServerlessapplicationrepositoryCloudformationStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack aws_serverlessapplicationrepository_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.serverlessapplicationrepository_cloudformation_stack.ServerlessapplicationrepositoryCloudformationStack;

ServerlessapplicationrepositoryCloudformationStack.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .semanticVersion(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ServerlessapplicationrepositoryCloudformationStackTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}.

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}.

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.semanticVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion">resetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts"></a>

```java
public void putTimeouts(ServerlessapplicationrepositoryCloudformationStackTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId"></a>

```java
public void resetId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSemanticVersion` <a name="resetSemanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion"></a>

```java
public void resetSemanticVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.serverlessapplicationrepository_cloudformation_stack.ServerlessapplicationrepositoryCloudformationStack;

ServerlessapplicationrepositoryCloudformationStack.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.serverlessapplicationrepository_cloudformation_stack.ServerlessapplicationrepositoryCloudformationStack;

ServerlessapplicationrepositoryCloudformationStack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.serverlessapplicationrepository_cloudformation_stack.ServerlessapplicationrepositoryCloudformationStack;

ServerlessapplicationrepositoryCloudformationStack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs">outputs</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput">semanticVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs"></a>

```java
public StringMap getOutputs();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts"></a>

```java
public ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput"></a>

```java
public java.lang.String getSemanticVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessapplicationrepositoryCloudformationStackConfig <a name="ServerlessapplicationrepositoryCloudformationStackConfig" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.serverlessapplicationrepository_cloudformation_stack.ServerlessapplicationrepositoryCloudformationStackConfig;

ServerlessapplicationrepositoryCloudformationStackConfig.builder()
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
    .applicationId(java.lang.String)
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .semanticVersion(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ServerlessapplicationrepositoryCloudformationStackTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}.

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}.

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts"></a>

```java
public ServerlessapplicationrepositoryCloudformationStackTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}

---

### ServerlessapplicationrepositoryCloudformationStackTimeouts <a name="ServerlessapplicationrepositoryCloudformationStackTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.serverlessapplicationrepository_cloudformation_stack.ServerlessapplicationrepositoryCloudformationStackTimeouts;

ServerlessapplicationrepositoryCloudformationStackTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference <a name="ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.serverlessapplicationrepository_cloudformation_stack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference;

new ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



