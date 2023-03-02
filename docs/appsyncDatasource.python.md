# `appsyncDatasource` Submodule <a name="`appsyncDatasource` Submodule" id="@cdktf/provider-aws.appsyncDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDatasource <a name="AppsyncDatasource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource aws_appsync_datasource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  name: str,
  type: str,
  description: str = None,
  dynamodb_config: AppsyncDatasourceDynamodbConfig = None,
  elasticsearch_config: AppsyncDatasourceElasticsearchConfig = None,
  http_config: AppsyncDatasourceHttpConfig = None,
  id: str = None,
  lambda_config: AppsyncDatasourceLambdaConfig = None,
  relational_database_config: AppsyncDatasourceRelationalDatabaseConfig = None,
  service_role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dynamodbConfig">dynamodb_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | dynamodb_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.elasticsearchConfig">elasticsearch_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | elasticsearch_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.httpConfig">http_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | http_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.relationalDatabaseConfig">relational_database_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | relational_database_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}.

---

##### `dynamodb_config`<sup>Optional</sup> <a name="dynamodb_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dynamodbConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

dynamodb_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}

---

##### `elasticsearch_config`<sup>Optional</sup> <a name="elasticsearch_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.elasticsearchConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

elasticsearch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.httpConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

http_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_config AppsyncDatasource#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}

---

##### `relational_database_config`<sup>Optional</sup> <a name="relational_database_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.relationalDatabaseConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

relational_database_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}

---

##### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.serviceRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig">put_dynamodb_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig">put_elasticsearch_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig">put_http_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig">put_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig">put_relational_database_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig">reset_dynamodb_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig">reset_elasticsearch_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig">reset_http_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig">reset_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig">reset_relational_database_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn">reset_service_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dynamodb_config` <a name="put_dynamodb_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig"></a>

```python
def put_dynamodb_config(
  table_name: str,
  delta_sync_config: AppsyncDatasourceDynamodbConfigDeltaSyncConfig = None,
  region: str = None,
  use_caller_credentials: typing.Union[bool, IResolvable] = None,
  versioned: typing.Union[bool, IResolvable] = None
) -> None
```

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}.

---

###### `delta_sync_config`<sup>Optional</sup> <a name="delta_sync_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.deltaSyncConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

delta_sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_config AppsyncDatasource#delta_sync_config}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

###### `use_caller_credentials`<sup>Optional</sup> <a name="use_caller_credentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.useCallerCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}.

---

###### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.versioned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}.

---

##### `put_elasticsearch_config` <a name="put_elasticsearch_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig"></a>

```python
def put_elasticsearch_config(
  endpoint: str,
  region: str = None
) -> None
```

###### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `put_http_config` <a name="put_http_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig"></a>

```python
def put_http_config(
  endpoint: str,
  authorization_config: AppsyncDatasourceHttpConfigAuthorizationConfig = None
) -> None
```

###### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_config AppsyncDatasource#authorization_config}

---

##### `put_lambda_config` <a name="put_lambda_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig"></a>

```python
def put_lambda_config(
  function_arn: str
) -> None
```

###### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig.parameter.functionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}.

---

##### `put_relational_database_config` <a name="put_relational_database_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig"></a>

```python
def put_relational_database_config(
  http_endpoint_config: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig = None,
  source_type: str = None
) -> None
```

###### `http_endpoint_config`<sup>Optional</sup> <a name="http_endpoint_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig.parameter.httpEndpointConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

http_endpoint_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_endpoint_config AppsyncDatasource#http_endpoint_config}

---

###### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamodb_config` <a name="reset_dynamodb_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig"></a>

```python
def reset_dynamodb_config() -> None
```

##### `reset_elasticsearch_config` <a name="reset_elasticsearch_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig"></a>

```python
def reset_elasticsearch_config() -> None
```

##### `reset_http_config` <a name="reset_http_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig"></a>

```python
def reset_http_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lambda_config` <a name="reset_lambda_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig"></a>

```python
def reset_lambda_config() -> None
```

##### `reset_relational_database_config` <a name="reset_relational_database_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig"></a>

```python
def reset_relational_database_config() -> None
```

##### `reset_service_role_arn` <a name="reset_service_role_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn"></a>

```python
def reset_service_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasource.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig">dynamodb_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig">elasticsearch_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig">http_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig">relational_database_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput">dynamodb_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput">elasticsearch_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput">http_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput">lambda_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput">relational_database_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput">service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dynamodb_config`<sup>Required</sup> <a name="dynamodb_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig"></a>

```python
dynamodb_config: AppsyncDatasourceDynamodbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a>

---

##### `elasticsearch_config`<sup>Required</sup> <a name="elasticsearch_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig"></a>

```python
elasticsearch_config: AppsyncDatasourceElasticsearchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a>

---

##### `http_config`<sup>Required</sup> <a name="http_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig"></a>

```python
http_config: AppsyncDatasourceHttpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a>

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig"></a>

```python
lambda_config: AppsyncDatasourceLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a>

---

##### `relational_database_config`<sup>Required</sup> <a name="relational_database_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig"></a>

```python
relational_database_config: AppsyncDatasourceRelationalDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dynamodb_config_input`<sup>Optional</sup> <a name="dynamodb_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput"></a>

```python
dynamodb_config_input: AppsyncDatasourceDynamodbConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---

##### `elasticsearch_config_input`<sup>Optional</sup> <a name="elasticsearch_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput"></a>

```python
elasticsearch_config_input: AppsyncDatasourceElasticsearchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---

##### `http_config_input`<sup>Optional</sup> <a name="http_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput"></a>

```python
http_config_input: AppsyncDatasourceHttpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lambda_config_input`<sup>Optional</sup> <a name="lambda_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput"></a>

```python
lambda_config_input: AppsyncDatasourceLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `relational_database_config_input`<sup>Optional</sup> <a name="relational_database_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput"></a>

```python
relational_database_config_input: AppsyncDatasourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---

##### `service_role_arn_input`<sup>Optional</sup> <a name="service_role_arn_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput"></a>

```python
service_role_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDatasourceConfig <a name="AppsyncDatasourceConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  name: str,
  type: str,
  description: str = None,
  dynamodb_config: AppsyncDatasourceDynamodbConfig = None,
  elasticsearch_config: AppsyncDatasourceElasticsearchConfig = None,
  http_config: AppsyncDatasourceHttpConfig = None,
  id: str = None,
  lambda_config: AppsyncDatasourceLambdaConfig = None,
  relational_database_config: AppsyncDatasourceRelationalDatabaseConfig = None,
  service_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig">dynamodb_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | dynamodb_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig">elasticsearch_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | elasticsearch_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig">http_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | http_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig">relational_database_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | relational_database_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}.

---

##### `dynamodb_config`<sup>Optional</sup> <a name="dynamodb_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig"></a>

```python
dynamodb_config: AppsyncDatasourceDynamodbConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

dynamodb_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}

---

##### `elasticsearch_config`<sup>Optional</sup> <a name="elasticsearch_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig"></a>

```python
elasticsearch_config: AppsyncDatasourceElasticsearchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

elasticsearch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig"></a>

```python
http_config: AppsyncDatasourceHttpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

http_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_config AppsyncDatasource#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig"></a>

```python
lambda_config: AppsyncDatasourceLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}

---

##### `relational_database_config`<sup>Optional</sup> <a name="relational_database_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig"></a>

```python
relational_database_config: AppsyncDatasourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

relational_database_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}

---

##### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}.

---

### AppsyncDatasourceDynamodbConfig <a name="AppsyncDatasourceDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceDynamodbConfig(
  table_name: str,
  delta_sync_config: AppsyncDatasourceDynamodbConfigDeltaSyncConfig = None,
  region: str = None,
  use_caller_credentials: typing.Union[bool, IResolvable] = None,
  versioned: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig">delta_sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | delta_sync_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials">use_caller_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned">versioned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}.

---

##### `delta_sync_config`<sup>Optional</sup> <a name="delta_sync_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig"></a>

```python
delta_sync_config: AppsyncDatasourceDynamodbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

delta_sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_config AppsyncDatasource#delta_sync_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `use_caller_credentials`<sup>Optional</sup> <a name="use_caller_credentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials"></a>

```python
use_caller_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned"></a>

```python
versioned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}.

---

### AppsyncDatasourceDynamodbConfigDeltaSyncConfig <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig(
  delta_sync_table_name: str,
  base_table_ttl: typing.Union[int, float] = None,
  delta_sync_table_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName">delta_sync_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl">base_table_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl">delta_sync_table_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}. |

---

##### `delta_sync_table_name`<sup>Required</sup> <a name="delta_sync_table_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```python
delta_sync_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}.

---

##### `base_table_ttl`<sup>Optional</sup> <a name="base_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```python
base_table_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}.

---

##### `delta_sync_table_ttl`<sup>Optional</sup> <a name="delta_sync_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```python
delta_sync_table_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}.

---

### AppsyncDatasourceElasticsearchConfig <a name="AppsyncDatasourceElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceElasticsearchConfig(
  endpoint: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

### AppsyncDatasourceHttpConfig <a name="AppsyncDatasourceHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceHttpConfig(
  endpoint: str,
  authorization_config: AppsyncDatasourceHttpConfigAuthorizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | authorization_config block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig"></a>

```python
authorization_config: AppsyncDatasourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_config AppsyncDatasource#authorization_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig(
  authorization_type: str = None,
  aws_iam_config: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig">aws_iam_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | aws_iam_config block. |

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}.

---

##### `aws_iam_config`<sup>Optional</sup> <a name="aws_iam_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```python
aws_iam_config: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

aws_iam_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_iam_config AppsyncDatasource#aws_iam_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig(
  signing_region: str = None,
  signing_service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">signing_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">signing_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}. |

---

##### `signing_region`<sup>Optional</sup> <a name="signing_region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```python
signing_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}.

---

##### `signing_service_name`<sup>Optional</sup> <a name="signing_service_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```python
signing_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}.

---

### AppsyncDatasourceLambdaConfig <a name="AppsyncDatasourceLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceLambdaConfig(
  function_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn">function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}. |

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}.

---

### AppsyncDatasourceRelationalDatabaseConfig <a name="AppsyncDatasourceRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig(
  http_endpoint_config: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig = None,
  source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig">http_endpoint_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | http_endpoint_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}. |

---

##### `http_endpoint_config`<sup>Optional</sup> <a name="http_endpoint_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig"></a>

```python
http_endpoint_config: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

http_endpoint_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_endpoint_config AppsyncDatasource#http_endpoint_config}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}.

---

### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig(
  aws_secret_store_arn: str,
  db_cluster_identifier: str,
  database_name: str = None,
  region: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn">aws_secret_store_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}. |

---

##### `aws_secret_store_arn`<sup>Required</sup> <a name="aws_secret_store_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn"></a>

```python
aws_secret_store_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}.

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">reset_base_table_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">reset_delta_sync_table_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_table_ttl` <a name="reset_base_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```python
def reset_base_table_ttl() -> None
```

##### `reset_delta_sync_table_ttl` <a name="reset_delta_sync_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```python
def reset_delta_sync_table_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">base_table_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">delta_sync_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">delta_sync_table_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">base_table_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">delta_sync_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">delta_sync_table_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_table_ttl_input`<sup>Optional</sup> <a name="base_table_ttl_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```python
base_table_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delta_sync_table_name_input`<sup>Optional</sup> <a name="delta_sync_table_name_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```python
delta_sync_table_name_input: str
```

- *Type:* str

---

##### `delta_sync_table_ttl_input`<sup>Optional</sup> <a name="delta_sync_table_ttl_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```python
delta_sync_table_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_table_ttl`<sup>Required</sup> <a name="base_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```python
base_table_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delta_sync_table_name`<sup>Required</sup> <a name="delta_sync_table_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```python
delta_sync_table_name: str
```

- *Type:* str

---

##### `delta_sync_table_ttl`<sup>Required</sup> <a name="delta_sync_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```python
delta_sync_table_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceDynamodbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---


### AppsyncDatasourceDynamodbConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig">put_delta_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig">reset_delta_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials">reset_use_caller_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned">reset_versioned</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_sync_config` <a name="put_delta_sync_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig"></a>

```python
def put_delta_sync_config(
  delta_sync_table_name: str,
  base_table_ttl: typing.Union[int, float] = None,
  delta_sync_table_ttl: typing.Union[int, float] = None
) -> None
```

###### `delta_sync_table_name`<sup>Required</sup> <a name="delta_sync_table_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig.parameter.deltaSyncTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}.

---

###### `base_table_ttl`<sup>Optional</sup> <a name="base_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig.parameter.baseTableTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}.

---

###### `delta_sync_table_ttl`<sup>Optional</sup> <a name="delta_sync_table_ttl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig.parameter.deltaSyncTableTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}.

---

##### `reset_delta_sync_config` <a name="reset_delta_sync_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig"></a>

```python
def reset_delta_sync_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_use_caller_credentials` <a name="reset_use_caller_credentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials"></a>

```python
def reset_use_caller_credentials() -> None
```

##### `reset_versioned` <a name="reset_versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned"></a>

```python
def reset_versioned() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig">delta_sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput">delta_sync_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput">use_caller_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput">versioned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials">use_caller_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned">versioned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_sync_config`<sup>Required</sup> <a name="delta_sync_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig"></a>

```python
delta_sync_config: AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a>

---

##### `delta_sync_config_input`<sup>Optional</sup> <a name="delta_sync_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput"></a>

```python
delta_sync_config_input: AppsyncDatasourceDynamodbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `use_caller_credentials_input`<sup>Optional</sup> <a name="use_caller_credentials_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput"></a>

```python
use_caller_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versioned_input`<sup>Optional</sup> <a name="versioned_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput"></a>

```python
versioned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `use_caller_credentials`<sup>Required</sup> <a name="use_caller_credentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials"></a>

```python
use_caller_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versioned`<sup>Required</sup> <a name="versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned"></a>

```python
versioned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceDynamodbConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---


### AppsyncDatasourceElasticsearchConfigOutputReference <a name="AppsyncDatasourceElasticsearchConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceElasticsearchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">reset_signing_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">reset_signing_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_signing_region` <a name="reset_signing_region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```python
def reset_signing_region() -> None
```

##### `reset_signing_service_name` <a name="reset_signing_service_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```python
def reset_signing_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">signing_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">signing_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">signing_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">signing_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_region_input`<sup>Optional</sup> <a name="signing_region_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```python
signing_region_input: str
```

- *Type:* str

---

##### `signing_service_name_input`<sup>Optional</sup> <a name="signing_service_name_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```python
signing_service_name_input: str
```

- *Type:* str

---

##### `signing_region`<sup>Required</sup> <a name="signing_region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```python
signing_region: str
```

- *Type:* str

---

##### `signing_service_name`<sup>Required</sup> <a name="signing_service_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```python
signing_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">put_aws_iam_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">reset_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">reset_aws_iam_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_iam_config` <a name="put_aws_iam_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```python
def put_aws_iam_config(
  signing_region: str = None,
  signing_service_name: str = None
) -> None
```

###### `signing_region`<sup>Optional</sup> <a name="signing_region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.signingRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}.

---

###### `signing_service_name`<sup>Optional</sup> <a name="signing_service_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.signingServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}.

---

##### `reset_authorization_type` <a name="reset_authorization_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```python
def reset_authorization_type() -> None
```

##### `reset_aws_iam_config` <a name="reset_aws_iam_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```python
def reset_aws_iam_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">aws_iam_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">aws_iam_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_iam_config`<sup>Required</sup> <a name="aws_iam_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```python
aws_iam_config: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `aws_iam_config_input`<sup>Optional</sup> <a name="aws_iam_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```python
aws_iam_config_input: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDatasourceHttpConfigOutputReference <a name="AppsyncDatasourceHttpConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  authorization_type: str = None,
  aws_iam_config: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig = None
) -> None
```

###### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig.parameter.authorizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}.

---

###### `aws_iam_config`<sup>Optional</sup> <a name="aws_iam_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig.parameter.awsIamConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

aws_iam_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_iam_config AppsyncDatasource#aws_iam_config}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig"></a>

```python
authorization_config: AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: AppsyncDatasourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceHttpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---


### AppsyncDatasourceLambdaConfigOutputReference <a name="AppsyncDatasourceLambdaConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput">function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_arn_input`<sup>Optional</sup> <a name="function_arn_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput"></a>

```python
function_arn_input: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_name` <a name="reset_database_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">aws_secret_store_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn">aws_secret_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_secret_store_arn_input`<sup>Optional</sup> <a name="aws_secret_store_arn_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```python
aws_secret_store_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `aws_secret_store_arn`<sup>Required</sup> <a name="aws_secret_store_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```python
aws_secret_store_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_datasource

appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig">put_http_endpoint_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig">reset_http_endpoint_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType">reset_source_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_endpoint_config` <a name="put_http_endpoint_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig"></a>

```python
def put_http_endpoint_config(
  aws_secret_store_arn: str,
  db_cluster_identifier: str,
  database_name: str = None,
  region: str = None,
  schema: str = None
) -> None
```

###### `aws_secret_store_arn`<sup>Required</sup> <a name="aws_secret_store_arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.awsSecretStoreArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}.

---

###### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.dbClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}.

---

##### `reset_http_endpoint_config` <a name="reset_http_endpoint_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig"></a>

```python
def reset_http_endpoint_config() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType"></a>

```python
def reset_source_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig">http_endpoint_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput">http_endpoint_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_config`<sup>Required</sup> <a name="http_endpoint_config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig"></a>

```python
http_endpoint_config: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a>

---

##### `http_endpoint_config_input`<sup>Optional</sup> <a name="http_endpoint_config_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput"></a>

```python
http_endpoint_config_input: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncDatasourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---



