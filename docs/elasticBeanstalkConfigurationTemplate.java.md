# `elasticBeanstalkConfigurationTemplate` Submodule <a name="`elasticBeanstalkConfigurationTemplate` Submodule" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkConfigurationTemplate <a name="ElasticBeanstalkConfigurationTemplate" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template aws_elastic_beanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplate;

ElasticBeanstalkConfigurationTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .application(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .environmentId(java.lang.String)
//  .id(java.lang.String)
//  .setting(IResolvable)
//  .setting(java.util.List<ElasticBeanstalkConfigurationTemplateSetting>)
//  .solutionStackName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.application">application</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.setting">setting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>></code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.application"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}.

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.setting"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>>

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#setting ElasticBeanstalkConfigurationTemplate#setting}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting">putSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting">resetSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName">resetSolutionStackName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSetting` <a name="putSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting"></a>

```java
public void putSetting(IResolvable OR java.util.List<ElasticBeanstalkConfigurationTemplateSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```java
public void resetEnvironmentId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetSetting` <a name="resetSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting"></a>

```java
public void resetSetting()
```

##### `resetSolutionStackName` <a name="resetSolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```java
public void resetSolutionStackName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplate;

ElasticBeanstalkConfigurationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplate;

ElasticBeanstalkConfigurationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplate;

ElasticBeanstalkConfigurationTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting">setting</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput">applicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput">settingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput">solutionStackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application">application</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting"></a>

```java
public ElasticBeanstalkConfigurationTemplateSettingList getSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a>

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput"></a>

```java
public java.lang.String getApplicationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput"></a>

```java
public java.lang.Object getSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>>

---

##### `solutionStackNameInput`<sup>Optional</sup> <a name="solutionStackNameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```java
public java.lang.String getSolutionStackNameInput();
```

- *Type:* java.lang.String

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkConfigurationTemplateConfig <a name="ElasticBeanstalkConfigurationTemplateConfig" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplateConfig;

ElasticBeanstalkConfigurationTemplateConfig.builder()
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
    .application(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .environmentId(java.lang.String)
//  .id(java.lang.String)
//  .setting(IResolvable)
//  .setting(java.util.List<ElasticBeanstalkConfigurationTemplateSetting>)
//  .solutionStackName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application">application</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting">setting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>></code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}.

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting"></a>

```java
public java.lang.Object getSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>>

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#setting ElasticBeanstalkConfigurationTemplate#setting}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}.

---

### ElasticBeanstalkConfigurationTemplateSetting <a name="ElasticBeanstalkConfigurationTemplateSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplateSetting;

ElasticBeanstalkConfigurationTemplateSetting.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .value(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource">resource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkConfigurationTemplateSettingList <a name="ElasticBeanstalkConfigurationTemplateSettingList" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplateSettingList;

new ElasticBeanstalkConfigurationTemplateSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get"></a>

```java
public ElasticBeanstalkConfigurationTemplateSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>>

---


### ElasticBeanstalkConfigurationTemplateSettingOutputReference <a name="ElasticBeanstalkConfigurationTemplateSettingOutputReference" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_configuration_template.ElasticBeanstalkConfigurationTemplateSettingOutputReference;

new ElasticBeanstalkConfigurationTemplateSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResource` <a name="resetResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a> OR com.hashicorp.cdktf.IResolvable

---



