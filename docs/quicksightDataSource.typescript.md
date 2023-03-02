# `quicksightDataSource` Submodule <a name="`quicksightDataSource` Submodule" id="@cdktf/provider-aws.quicksightDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSource <a name="QuicksightDataSource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source aws_quicksight_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSource(scope: Construct, id: string, config: QuicksightDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig">QuicksightDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig">QuicksightDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission">putPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties">putSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties">putVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission">resetPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties">resetSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties">resetVpcConnectionProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials"></a>

```typescript
public putCredentials(value: QuicksightDataSourceCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters"></a>

```typescript
public putParameters(value: QuicksightDataSourceParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---

##### `putPermission` <a name="putPermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission"></a>

```typescript
public putPermission(value: IResolvable | QuicksightDataSourcePermission[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>[]

---

##### `putSslProperties` <a name="putSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties"></a>

```typescript
public putSslProperties(value: QuicksightDataSourceSslProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---

##### `putVpcConnectionProperties` <a name="putVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties"></a>

```typescript
public putVpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission"></a>

```typescript
public resetPermission(): void
```

##### `resetSslProperties` <a name="resetSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties"></a>

```typescript
public resetSslProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVpcConnectionProperties` <a name="resetVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties"></a>

```typescript
public resetVpcConnectionProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

quicksightDataSource.QuicksightDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

quicksightDataSource.QuicksightDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

quicksightDataSource.QuicksightDataSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission">permission</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties">sslProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties">vpcConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput">permissionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput">sslPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput">vpcConnectionPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials"></a>

```typescript
public readonly credentials: QuicksightDataSourceCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters"></a>

```typescript
public readonly parameters: QuicksightDataSourceParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a>

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission"></a>

```typescript
public readonly permission: QuicksightDataSourcePermissionList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a>

---

##### `sslProperties`<sup>Required</sup> <a name="sslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties"></a>

```typescript
public readonly sslProperties: QuicksightDataSourceSslPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a>

---

##### `vpcConnectionProperties`<sup>Required</sup> <a name="vpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties"></a>

```typescript
public readonly vpcConnectionProperties: QuicksightDataSourceVpcConnectionPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: QuicksightDataSourceCredentials;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput"></a>

```typescript
public readonly parametersInput: QuicksightDataSourceParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput"></a>

```typescript
public readonly permissionInput: IResolvable | QuicksightDataSourcePermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>[]

---

##### `sslPropertiesInput`<sup>Optional</sup> <a name="sslPropertiesInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput"></a>

```typescript
public readonly sslPropertiesInput: QuicksightDataSourceSslProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcConnectionPropertiesInput`<sup>Optional</sup> <a name="vpcConnectionPropertiesInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput"></a>

```typescript
public readonly vpcConnectionPropertiesInput: QuicksightDataSourceVpcConnectionProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSourceConfig <a name="QuicksightDataSourceConfig" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceConfig: quicksightDataSource.QuicksightDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission">permission</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>[]</code> | permission block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties">sslProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | ssl_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties">vpcConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | vpc_connection_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters"></a>

```typescript
public readonly parameters: QuicksightDataSourceParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#parameters QuicksightDataSource#parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials"></a>

```typescript
public readonly credentials: QuicksightDataSourceCredentials;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credentials QuicksightDataSource#credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission"></a>

```typescript
public readonly permission: IResolvable | QuicksightDataSourcePermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>[]

permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#permission QuicksightDataSource#permission}

---

##### `sslProperties`<sup>Optional</sup> <a name="sslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties"></a>

```typescript
public readonly sslProperties: QuicksightDataSourceSslProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

ssl_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}.

---

##### `vpcConnectionProperties`<sup>Optional</sup> <a name="vpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties"></a>

```typescript
public readonly vpcConnectionProperties: QuicksightDataSourceVpcConnectionProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

vpc_connection_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}

---

### QuicksightDataSourceCredentials <a name="QuicksightDataSourceCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceCredentials: quicksightDataSource.QuicksightDataSourceCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn">copySourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair">credentialPair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | credential_pair block. |

---

##### `copySourceArn`<sup>Optional</sup> <a name="copySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn"></a>

```typescript
public readonly copySourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}.

---

##### `credentialPair`<sup>Optional</sup> <a name="credentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair"></a>

```typescript
public readonly credentialPair: QuicksightDataSourceCredentialsCredentialPair;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

credential_pair block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}

---

### QuicksightDataSourceCredentialsCredentialPair <a name="QuicksightDataSourceCredentialsCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceCredentialsCredentialPair: quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}.

---

### QuicksightDataSourceParameters <a name="QuicksightDataSourceParameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParameters: quicksightDataSource.QuicksightDataSourceParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch">amazonElasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | amazon_elasticsearch block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena">athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | athena block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora">aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | aurora block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql">auroraPostgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | aurora_postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics">awsIotAnalytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | aws_iot_analytics block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | jira block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb">mariaDb</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto">presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | presto block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | rds block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | service_now block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer">sqlServer</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | sql_server block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata">teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | teradata block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | twitter block. |

---

##### `amazonElasticsearch`<sup>Optional</sup> <a name="amazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch"></a>

```typescript
public readonly amazonElasticsearch: QuicksightDataSourceParametersAmazonElasticsearch;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

amazon_elasticsearch block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}

---

##### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena"></a>

```typescript
public readonly athena: QuicksightDataSourceParametersAthena;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

athena block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#athena QuicksightDataSource#athena}

---

##### `aurora`<sup>Optional</sup> <a name="aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora"></a>

```typescript
public readonly aurora: QuicksightDataSourceParametersAurora;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

aurora block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora QuicksightDataSource#aurora}

---

##### `auroraPostgresql`<sup>Optional</sup> <a name="auroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql"></a>

```typescript
public readonly auroraPostgresql: QuicksightDataSourceParametersAuroraPostgresql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

aurora_postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora_postgresql QuicksightDataSource#aurora_postgresql}

---

##### `awsIotAnalytics`<sup>Optional</sup> <a name="awsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics"></a>

```typescript
public readonly awsIotAnalytics: QuicksightDataSourceParametersAwsIotAnalytics;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

aws_iot_analytics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira"></a>

```typescript
public readonly jira: QuicksightDataSourceParametersJira;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

jira block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#jira QuicksightDataSource#jira}

---

##### `mariaDb`<sup>Optional</sup> <a name="mariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb"></a>

```typescript
public readonly mariaDb: QuicksightDataSourceParametersMariaDb;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#maria_db QuicksightDataSource#maria_db}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql"></a>

```typescript
public readonly mysql: QuicksightDataSourceParametersMysql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#mysql QuicksightDataSource#mysql}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle"></a>

```typescript
public readonly oracle: QuicksightDataSourceParametersOracle;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#oracle QuicksightDataSource#oracle}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql"></a>

```typescript
public readonly postgresql: QuicksightDataSourceParametersPostgresql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#postgresql QuicksightDataSource#postgresql}

---

##### `presto`<sup>Optional</sup> <a name="presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto"></a>

```typescript
public readonly presto: QuicksightDataSourceParametersPresto;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

presto block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#presto QuicksightDataSource#presto}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds"></a>

```typescript
public readonly rds: QuicksightDataSourceParametersRds;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

rds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#rds QuicksightDataSource#rds}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift"></a>

```typescript
public readonly redshift: QuicksightDataSourceParametersRedshift;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#redshift QuicksightDataSource#redshift}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3"></a>

```typescript
public readonly s3: QuicksightDataSourceParametersS3;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#s3 QuicksightDataSource#s3}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow"></a>

```typescript
public readonly serviceNow: QuicksightDataSourceParametersServiceNow;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

service_now block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#service_now QuicksightDataSource#service_now}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake"></a>

```typescript
public readonly snowflake: QuicksightDataSourceParametersSnowflake;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#snowflake QuicksightDataSource#snowflake}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark"></a>

```typescript
public readonly spark: QuicksightDataSourceParametersSpark;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

spark block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#spark QuicksightDataSource#spark}

---

##### `sqlServer`<sup>Optional</sup> <a name="sqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer"></a>

```typescript
public readonly sqlServer: QuicksightDataSourceParametersSqlServer;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

sql_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#sql_server QuicksightDataSource#sql_server}

---

##### `teradata`<sup>Optional</sup> <a name="teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata"></a>

```typescript
public readonly teradata: QuicksightDataSourceParametersTeradata;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

teradata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#teradata QuicksightDataSource#teradata}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter"></a>

```typescript
public readonly twitter: QuicksightDataSourceParametersTwitter;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#twitter QuicksightDataSource#twitter}

---

### QuicksightDataSourceParametersAmazonElasticsearch <a name="QuicksightDataSourceParametersAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersAmazonElasticsearch: quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}.

---

### QuicksightDataSourceParametersAthena <a name="QuicksightDataSourceParametersAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersAthena: quicksightDataSource.QuicksightDataSourceParametersAthena = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup">workGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}. |

---

##### `workGroup`<sup>Optional</sup> <a name="workGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup"></a>

```typescript
public readonly workGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}.

---

### QuicksightDataSourceParametersAurora <a name="QuicksightDataSourceParametersAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersAurora: quicksightDataSource.QuicksightDataSourceParametersAurora = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAuroraPostgresql <a name="QuicksightDataSourceParametersAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersAuroraPostgresql: quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAwsIotAnalytics <a name="QuicksightDataSourceParametersAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersAwsIotAnalytics: quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName">dataSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}. |

---

##### `dataSetName`<sup>Required</sup> <a name="dataSetName" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName"></a>

```typescript
public readonly dataSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}.

---

### QuicksightDataSourceParametersJira <a name="QuicksightDataSourceParametersJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersJira: quicksightDataSource.QuicksightDataSourceParametersJira = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl">siteBaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl"></a>

```typescript
public readonly siteBaseUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersMariaDb <a name="QuicksightDataSourceParametersMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersMariaDb: quicksightDataSource.QuicksightDataSourceParametersMariaDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersMysql <a name="QuicksightDataSourceParametersMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersMysql: quicksightDataSource.QuicksightDataSourceParametersMysql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersOracle <a name="QuicksightDataSourceParametersOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersOracle: quicksightDataSource.QuicksightDataSourceParametersOracle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPostgresql <a name="QuicksightDataSourceParametersPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersPostgresql: quicksightDataSource.QuicksightDataSourceParametersPostgresql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPresto <a name="QuicksightDataSourceParametersPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersPresto: quicksightDataSource.QuicksightDataSourceParametersPresto = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersRds <a name="QuicksightDataSourceParametersRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersRds: quicksightDataSource.QuicksightDataSourceParametersRds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}.

---

### QuicksightDataSourceParametersRedshift <a name="QuicksightDataSourceParametersRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersRedshift: quicksightDataSource.QuicksightDataSourceParametersRedshift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersS3 <a name="QuicksightDataSourceParametersS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersS3: quicksightDataSource.QuicksightDataSourceParametersS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation">manifestFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | manifest_file_location block. |

---

##### `manifestFileLocation`<sup>Required</sup> <a name="manifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation"></a>

```typescript
public readonly manifestFileLocation: QuicksightDataSourceParametersS3ManifestFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

manifest_file_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}

---

### QuicksightDataSourceParametersS3ManifestFileLocation <a name="QuicksightDataSourceParametersS3ManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersS3ManifestFileLocation: quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}.

---

### QuicksightDataSourceParametersServiceNow <a name="QuicksightDataSourceParametersServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersServiceNow: quicksightDataSource.QuicksightDataSourceParametersServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl">siteBaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl"></a>

```typescript
public readonly siteBaseUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersSnowflake <a name="QuicksightDataSourceParametersSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersSnowflake: quicksightDataSource.QuicksightDataSourceParametersSnowflake = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse">warehouse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}.

---

### QuicksightDataSourceParametersSpark <a name="QuicksightDataSourceParametersSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersSpark: quicksightDataSource.QuicksightDataSourceParametersSpark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersSqlServer <a name="QuicksightDataSourceParametersSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersSqlServer: quicksightDataSource.QuicksightDataSourceParametersSqlServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTeradata <a name="QuicksightDataSourceParametersTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersTeradata: quicksightDataSource.QuicksightDataSourceParametersTeradata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTwitter <a name="QuicksightDataSourceParametersTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceParametersTwitter: quicksightDataSource.QuicksightDataSourceParametersTwitter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows">maxRows</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}. |

---

##### `maxRows`<sup>Required</sup> <a name="maxRows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows"></a>

```typescript
public readonly maxRows: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}.

---

### QuicksightDataSourcePermission <a name="QuicksightDataSourcePermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourcePermission: quicksightDataSource.QuicksightDataSourcePermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}.

---

### QuicksightDataSourceSslProperties <a name="QuicksightDataSourceSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceSslProperties: quicksightDataSource.QuicksightDataSourceSslProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl">disableSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}. |

---

##### `disableSsl`<sup>Required</sup> <a name="disableSsl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl"></a>

```typescript
public readonly disableSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}.

---

### QuicksightDataSourceVpcConnectionProperties <a name="QuicksightDataSourceVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

const quicksightDataSourceVpcConnectionProperties: quicksightDataSource.QuicksightDataSourceVpcConnectionProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}. |

---

##### `vpcConnectionArn`<sup>Required</sup> <a name="vpcConnectionArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn"></a>

```typescript
public readonly vpcConnectionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSourceCredentialsCredentialPairOutputReference <a name="QuicksightDataSourceCredentialsCredentialPairOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceCredentialsCredentialPair;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---


### QuicksightDataSourceCredentialsOutputReference <a name="QuicksightDataSourceCredentialsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair">putCredentialPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn">resetCopySourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair">resetCredentialPair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentialPair` <a name="putCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair"></a>

```typescript
public putCredentialPair(value: QuicksightDataSourceCredentialsCredentialPair): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---

##### `resetCopySourceArn` <a name="resetCopySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn"></a>

```typescript
public resetCopySourceArn(): void
```

##### `resetCredentialPair` <a name="resetCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair"></a>

```typescript
public resetCredentialPair(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair">credentialPair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput">copySourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput">credentialPairInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn">copySourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialPair`<sup>Required</sup> <a name="credentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair"></a>

```typescript
public readonly credentialPair: QuicksightDataSourceCredentialsCredentialPairOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a>

---

##### `copySourceArnInput`<sup>Optional</sup> <a name="copySourceArnInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput"></a>

```typescript
public readonly copySourceArnInput: string;
```

- *Type:* string

---

##### `credentialPairInput`<sup>Optional</sup> <a name="credentialPairInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput"></a>

```typescript
public readonly credentialPairInput: QuicksightDataSourceCredentialsCredentialPair;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---

##### `copySourceArn`<sup>Required</sup> <a name="copySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn"></a>

```typescript
public readonly copySourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceCredentials;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---


### QuicksightDataSourceParametersAmazonElasticsearchOutputReference <a name="QuicksightDataSourceParametersAmazonElasticsearchOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersAmazonElasticsearch;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---


### QuicksightDataSourceParametersAthenaOutputReference <a name="QuicksightDataSourceParametersAthenaOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup">resetWorkGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkGroup` <a name="resetWorkGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup"></a>

```typescript
public resetWorkGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput">workGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup">workGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workGroupInput`<sup>Optional</sup> <a name="workGroupInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput"></a>

```typescript
public readonly workGroupInput: string;
```

- *Type:* string

---

##### `workGroup`<sup>Required</sup> <a name="workGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup"></a>

```typescript
public readonly workGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersAthena;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---


### QuicksightDataSourceParametersAuroraOutputReference <a name="QuicksightDataSourceParametersAuroraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersAurora;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---


### QuicksightDataSourceParametersAuroraPostgresqlOutputReference <a name="QuicksightDataSourceParametersAuroraPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersAuroraPostgresql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---


### QuicksightDataSourceParametersAwsIotAnalyticsOutputReference <a name="QuicksightDataSourceParametersAwsIotAnalyticsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput">dataSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName">dataSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetNameInput`<sup>Optional</sup> <a name="dataSetNameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput"></a>

```typescript
public readonly dataSetNameInput: string;
```

- *Type:* string

---

##### `dataSetName`<sup>Required</sup> <a name="dataSetName" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName"></a>

```typescript
public readonly dataSetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersAwsIotAnalytics;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---


### QuicksightDataSourceParametersJiraOutputReference <a name="QuicksightDataSourceParametersJiraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput">siteBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl">siteBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `siteBaseUrlInput`<sup>Optional</sup> <a name="siteBaseUrlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput"></a>

```typescript
public readonly siteBaseUrlInput: string;
```

- *Type:* string

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl"></a>

```typescript
public readonly siteBaseUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersJira;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---


### QuicksightDataSourceParametersMariaDbOutputReference <a name="QuicksightDataSourceParametersMariaDbOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersMariaDb;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---


### QuicksightDataSourceParametersMysqlOutputReference <a name="QuicksightDataSourceParametersMysqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersMysql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---


### QuicksightDataSourceParametersOracleOutputReference <a name="QuicksightDataSourceParametersOracleOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersOracle;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---


### QuicksightDataSourceParametersOutputReference <a name="QuicksightDataSourceParametersOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch">putAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena">putAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora">putAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql">putAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics">putAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira">putJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb">putMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql">putMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle">putOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql">putPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto">putPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds">putRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake">putSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer">putSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata">putTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch">resetAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena">resetAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora">resetAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql">resetAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics">resetAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira">resetJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb">resetMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql">resetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle">resetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql">resetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto">resetPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds">resetRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake">resetSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer">resetSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata">resetTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonElasticsearch` <a name="putAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch"></a>

```typescript
public putAmazonElasticsearch(value: QuicksightDataSourceParametersAmazonElasticsearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---

##### `putAthena` <a name="putAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena"></a>

```typescript
public putAthena(value: QuicksightDataSourceParametersAthena): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---

##### `putAurora` <a name="putAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora"></a>

```typescript
public putAurora(value: QuicksightDataSourceParametersAurora): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---

##### `putAuroraPostgresql` <a name="putAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql"></a>

```typescript
public putAuroraPostgresql(value: QuicksightDataSourceParametersAuroraPostgresql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---

##### `putAwsIotAnalytics` <a name="putAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics"></a>

```typescript
public putAwsIotAnalytics(value: QuicksightDataSourceParametersAwsIotAnalytics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---

##### `putJira` <a name="putJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira"></a>

```typescript
public putJira(value: QuicksightDataSourceParametersJira): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---

##### `putMariaDb` <a name="putMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb"></a>

```typescript
public putMariaDb(value: QuicksightDataSourceParametersMariaDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---

##### `putMysql` <a name="putMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql"></a>

```typescript
public putMysql(value: QuicksightDataSourceParametersMysql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---

##### `putOracle` <a name="putOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle"></a>

```typescript
public putOracle(value: QuicksightDataSourceParametersOracle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---

##### `putPostgresql` <a name="putPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql"></a>

```typescript
public putPostgresql(value: QuicksightDataSourceParametersPostgresql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---

##### `putPresto` <a name="putPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto"></a>

```typescript
public putPresto(value: QuicksightDataSourceParametersPresto): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---

##### `putRds` <a name="putRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds"></a>

```typescript
public putRds(value: QuicksightDataSourceParametersRds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---

##### `putRedshift` <a name="putRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift"></a>

```typescript
public putRedshift(value: QuicksightDataSourceParametersRedshift): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3"></a>

```typescript
public putS3(value: QuicksightDataSourceParametersS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: QuicksightDataSourceParametersServiceNow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---

##### `putSnowflake` <a name="putSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake"></a>

```typescript
public putSnowflake(value: QuicksightDataSourceParametersSnowflake): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark"></a>

```typescript
public putSpark(value: QuicksightDataSourceParametersSpark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---

##### `putSqlServer` <a name="putSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer"></a>

```typescript
public putSqlServer(value: QuicksightDataSourceParametersSqlServer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---

##### `putTeradata` <a name="putTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata"></a>

```typescript
public putTeradata(value: QuicksightDataSourceParametersTeradata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter"></a>

```typescript
public putTwitter(value: QuicksightDataSourceParametersTwitter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---

##### `resetAmazonElasticsearch` <a name="resetAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch"></a>

```typescript
public resetAmazonElasticsearch(): void
```

##### `resetAthena` <a name="resetAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena"></a>

```typescript
public resetAthena(): void
```

##### `resetAurora` <a name="resetAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora"></a>

```typescript
public resetAurora(): void
```

##### `resetAuroraPostgresql` <a name="resetAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql"></a>

```typescript
public resetAuroraPostgresql(): void
```

##### `resetAwsIotAnalytics` <a name="resetAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics"></a>

```typescript
public resetAwsIotAnalytics(): void
```

##### `resetJira` <a name="resetJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira"></a>

```typescript
public resetJira(): void
```

##### `resetMariaDb` <a name="resetMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb"></a>

```typescript
public resetMariaDb(): void
```

##### `resetMysql` <a name="resetMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql"></a>

```typescript
public resetMysql(): void
```

##### `resetOracle` <a name="resetOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle"></a>

```typescript
public resetOracle(): void
```

##### `resetPostgresql` <a name="resetPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql"></a>

```typescript
public resetPostgresql(): void
```

##### `resetPresto` <a name="resetPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto"></a>

```typescript
public resetPresto(): void
```

##### `resetRds` <a name="resetRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds"></a>

```typescript
public resetRds(): void
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift"></a>

```typescript
public resetRedshift(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```

##### `resetSnowflake` <a name="resetSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake"></a>

```typescript
public resetSnowflake(): void
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark"></a>

```typescript
public resetSpark(): void
```

##### `resetSqlServer` <a name="resetSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer"></a>

```typescript
public resetSqlServer(): void
```

##### `resetTeradata` <a name="resetTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata"></a>

```typescript
public resetTeradata(): void
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter"></a>

```typescript
public resetTwitter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch">amazonElasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena">athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora">aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql">auroraPostgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics">awsIotAnalytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb">mariaDb</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto">presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer">sqlServer</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata">teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput">amazonElasticsearchInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput">athenaInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput">auroraInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput">auroraPostgresqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput">awsIotAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput">jiraInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput">mariaDbInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput">mysqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput">oracleInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput">postgresqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput">prestoInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput">rdsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput">redshiftInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput">snowflakeInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput">sqlServerInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput">teradataInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonElasticsearch`<sup>Required</sup> <a name="amazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch"></a>

```typescript
public readonly amazonElasticsearch: QuicksightDataSourceParametersAmazonElasticsearchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a>

---

##### `athena`<sup>Required</sup> <a name="athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena"></a>

```typescript
public readonly athena: QuicksightDataSourceParametersAthenaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a>

---

##### `aurora`<sup>Required</sup> <a name="aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora"></a>

```typescript
public readonly aurora: QuicksightDataSourceParametersAuroraOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a>

---

##### `auroraPostgresql`<sup>Required</sup> <a name="auroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql"></a>

```typescript
public readonly auroraPostgresql: QuicksightDataSourceParametersAuroraPostgresqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a>

---

##### `awsIotAnalytics`<sup>Required</sup> <a name="awsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics"></a>

```typescript
public readonly awsIotAnalytics: QuicksightDataSourceParametersAwsIotAnalyticsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a>

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira"></a>

```typescript
public readonly jira: QuicksightDataSourceParametersJiraOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a>

---

##### `mariaDb`<sup>Required</sup> <a name="mariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb"></a>

```typescript
public readonly mariaDb: QuicksightDataSourceParametersMariaDbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql"></a>

```typescript
public readonly mysql: QuicksightDataSourceParametersMysqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a>

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle"></a>

```typescript
public readonly oracle: QuicksightDataSourceParametersOracleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql"></a>

```typescript
public readonly postgresql: QuicksightDataSourceParametersPostgresqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a>

---

##### `presto`<sup>Required</sup> <a name="presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto"></a>

```typescript
public readonly presto: QuicksightDataSourceParametersPrestoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a>

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds"></a>

```typescript
public readonly rds: QuicksightDataSourceParametersRdsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift"></a>

```typescript
public readonly redshift: QuicksightDataSourceParametersRedshiftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3"></a>

```typescript
public readonly s3: QuicksightDataSourceParametersS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: QuicksightDataSourceParametersServiceNowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake"></a>

```typescript
public readonly snowflake: QuicksightDataSourceParametersSnowflakeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark"></a>

```typescript
public readonly spark: QuicksightDataSourceParametersSparkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a>

---

##### `sqlServer`<sup>Required</sup> <a name="sqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer"></a>

```typescript
public readonly sqlServer: QuicksightDataSourceParametersSqlServerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a>

---

##### `teradata`<sup>Required</sup> <a name="teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata"></a>

```typescript
public readonly teradata: QuicksightDataSourceParametersTeradataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter"></a>

```typescript
public readonly twitter: QuicksightDataSourceParametersTwitterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a>

---

##### `amazonElasticsearchInput`<sup>Optional</sup> <a name="amazonElasticsearchInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput"></a>

```typescript
public readonly amazonElasticsearchInput: QuicksightDataSourceParametersAmazonElasticsearch;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---

##### `athenaInput`<sup>Optional</sup> <a name="athenaInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput"></a>

```typescript
public readonly athenaInput: QuicksightDataSourceParametersAthena;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---

##### `auroraInput`<sup>Optional</sup> <a name="auroraInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput"></a>

```typescript
public readonly auroraInput: QuicksightDataSourceParametersAurora;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---

##### `auroraPostgresqlInput`<sup>Optional</sup> <a name="auroraPostgresqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput"></a>

```typescript
public readonly auroraPostgresqlInput: QuicksightDataSourceParametersAuroraPostgresql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---

##### `awsIotAnalyticsInput`<sup>Optional</sup> <a name="awsIotAnalyticsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput"></a>

```typescript
public readonly awsIotAnalyticsInput: QuicksightDataSourceParametersAwsIotAnalytics;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---

##### `jiraInput`<sup>Optional</sup> <a name="jiraInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput"></a>

```typescript
public readonly jiraInput: QuicksightDataSourceParametersJira;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---

##### `mariaDbInput`<sup>Optional</sup> <a name="mariaDbInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput"></a>

```typescript
public readonly mariaDbInput: QuicksightDataSourceParametersMariaDb;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---

##### `mysqlInput`<sup>Optional</sup> <a name="mysqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput"></a>

```typescript
public readonly mysqlInput: QuicksightDataSourceParametersMysql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---

##### `oracleInput`<sup>Optional</sup> <a name="oracleInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput"></a>

```typescript
public readonly oracleInput: QuicksightDataSourceParametersOracle;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---

##### `postgresqlInput`<sup>Optional</sup> <a name="postgresqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput"></a>

```typescript
public readonly postgresqlInput: QuicksightDataSourceParametersPostgresql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---

##### `prestoInput`<sup>Optional</sup> <a name="prestoInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput"></a>

```typescript
public readonly prestoInput: QuicksightDataSourceParametersPresto;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---

##### `rdsInput`<sup>Optional</sup> <a name="rdsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput"></a>

```typescript
public readonly rdsInput: QuicksightDataSourceParametersRds;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput"></a>

```typescript
public readonly redshiftInput: QuicksightDataSourceParametersRedshift;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: QuicksightDataSourceParametersS3;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: QuicksightDataSourceParametersServiceNow;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---

##### `snowflakeInput`<sup>Optional</sup> <a name="snowflakeInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput"></a>

```typescript
public readonly snowflakeInput: QuicksightDataSourceParametersSnowflake;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput"></a>

```typescript
public readonly sparkInput: QuicksightDataSourceParametersSpark;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---

##### `sqlServerInput`<sup>Optional</sup> <a name="sqlServerInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput"></a>

```typescript
public readonly sqlServerInput: QuicksightDataSourceParametersSqlServer;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---

##### `teradataInput`<sup>Optional</sup> <a name="teradataInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput"></a>

```typescript
public readonly teradataInput: QuicksightDataSourceParametersTeradata;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput"></a>

```typescript
public readonly twitterInput: QuicksightDataSourceParametersTwitter;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---


### QuicksightDataSourceParametersPostgresqlOutputReference <a name="QuicksightDataSourceParametersPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersPostgresql;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---


### QuicksightDataSourceParametersPrestoOutputReference <a name="QuicksightDataSourceParametersPrestoOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersPresto;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---


### QuicksightDataSourceParametersRdsOutputReference <a name="QuicksightDataSourceParametersRdsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersRds;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---


### QuicksightDataSourceParametersRedshiftOutputReference <a name="QuicksightDataSourceParametersRedshiftOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersRedshift;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---


### QuicksightDataSourceParametersS3ManifestFileLocationOutputReference <a name="QuicksightDataSourceParametersS3ManifestFileLocationOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersS3ManifestFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---


### QuicksightDataSourceParametersS3OutputReference <a name="QuicksightDataSourceParametersS3OutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation">putManifestFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManifestFileLocation` <a name="putManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation"></a>

```typescript
public putManifestFileLocation(value: QuicksightDataSourceParametersS3ManifestFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation">manifestFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput">manifestFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manifestFileLocation`<sup>Required</sup> <a name="manifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation"></a>

```typescript
public readonly manifestFileLocation: QuicksightDataSourceParametersS3ManifestFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a>

---

##### `manifestFileLocationInput`<sup>Optional</sup> <a name="manifestFileLocationInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput"></a>

```typescript
public readonly manifestFileLocationInput: QuicksightDataSourceParametersS3ManifestFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersS3;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---


### QuicksightDataSourceParametersServiceNowOutputReference <a name="QuicksightDataSourceParametersServiceNowOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput">siteBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl">siteBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `siteBaseUrlInput`<sup>Optional</sup> <a name="siteBaseUrlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput"></a>

```typescript
public readonly siteBaseUrlInput: string;
```

- *Type:* string

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl"></a>

```typescript
public readonly siteBaseUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersServiceNow;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---


### QuicksightDataSourceParametersSnowflakeOutputReference <a name="QuicksightDataSourceParametersSnowflakeOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput">warehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput"></a>

```typescript
public readonly warehouseInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersSnowflake;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---


### QuicksightDataSourceParametersSparkOutputReference <a name="QuicksightDataSourceParametersSparkOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersSpark;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---


### QuicksightDataSourceParametersSqlServerOutputReference <a name="QuicksightDataSourceParametersSqlServerOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersSqlServer;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---


### QuicksightDataSourceParametersTeradataOutputReference <a name="QuicksightDataSourceParametersTeradataOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersTeradata;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---


### QuicksightDataSourceParametersTwitterOutputReference <a name="QuicksightDataSourceParametersTwitterOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput">maxRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows">maxRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRowsInput`<sup>Optional</sup> <a name="maxRowsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput"></a>

```typescript
public readonly maxRowsInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `maxRows`<sup>Required</sup> <a name="maxRows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows"></a>

```typescript
public readonly maxRows: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceParametersTwitter;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---


### QuicksightDataSourcePermissionList <a name="QuicksightDataSourcePermissionList" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourcePermissionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get"></a>

```typescript
public get(index: number): QuicksightDataSourcePermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightDataSourcePermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>[]

---


### QuicksightDataSourcePermissionOutputReference <a name="QuicksightDataSourcePermissionOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourcePermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourcePermission | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a> | cdktf.IResolvable

---


### QuicksightDataSourceSslPropertiesOutputReference <a name="QuicksightDataSourceSslPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput">disableSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl">disableSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableSslInput`<sup>Optional</sup> <a name="disableSslInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput"></a>

```typescript
public readonly disableSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableSsl`<sup>Required</sup> <a name="disableSsl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl"></a>

```typescript
public readonly disableSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceSslProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---


### QuicksightDataSourceVpcConnectionPropertiesOutputReference <a name="QuicksightDataSourceVpcConnectionPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer"></a>

```typescript
import { quicksightDataSource } from '@cdktf/provider-aws'

new quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">vpcConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConnectionArnInput`<sup>Optional</sup> <a name="vpcConnectionArnInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```typescript
public readonly vpcConnectionArnInput: string;
```

- *Type:* string

---

##### `vpcConnectionArn`<sup>Required</sup> <a name="vpcConnectionArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```typescript
public readonly vpcConnectionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightDataSourceVpcConnectionProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---



