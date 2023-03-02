# `lambdaCodeSigningConfig` Submodule <a name="`lambdaCodeSigningConfig` Submodule" id="@cdktf/provider-aws.lambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCodeSigningConfig <a name="LambdaCodeSigningConfig" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

new lambdaCodeSigningConfig.LambdaCodeSigningConfig(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers">putAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAllowedPublishers` <a name="putAllowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers"></a>

```typescript
public putAllowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `putPolicies` <a name="putPolicies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies"></a>

```typescript
public putPolicies(value: LambdaCodeSigningConfigPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers">allowedPublishers</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput">allowedPublishersInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput">policiesInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedPublishers`<sup>Required</sup> <a name="allowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers"></a>

```typescript
public readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies"></a>

```typescript
public readonly policies: LambdaCodeSigningConfigPoliciesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a>

---

##### `allowedPublishersInput`<sup>Optional</sup> <a name="allowedPublishersInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput"></a>

```typescript
public readonly allowedPublishersInput: LambdaCodeSigningConfigAllowedPublishers;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput"></a>

```typescript
public readonly policiesInput: LambdaCodeSigningConfigPolicies;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCodeSigningConfigAllowedPublishers <a name="LambdaCodeSigningConfigAllowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

const lambdaCodeSigningConfigAllowedPublishers: lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns">signingProfileVersionArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}. |

---

##### `signingProfileVersionArns`<sup>Required</sup> <a name="signingProfileVersionArns" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

```typescript
public readonly signingProfileVersionArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}.

---

### LambdaCodeSigningConfigConfig <a name="LambdaCodeSigningConfigConfig" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

const lambdaCodeSigningConfigConfig: lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers">allowedPublishers</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | allowed_publishers block. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | policies block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedPublishers`<sup>Required</sup> <a name="allowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers"></a>

```typescript
public readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

allowed_publishers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies"></a>

```typescript
public readonly policies: LambdaCodeSigningConfigPolicies;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#policies LambdaCodeSigningConfig#policies}

---

### LambdaCodeSigningConfigPolicies <a name="LambdaCodeSigningConfigPolicies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

const lambdaCodeSigningConfigPolicies: lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment">untrustedArtifactOnDeployment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}. |

---

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="untrustedArtifactOnDeployment" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment"></a>

```typescript
public readonly untrustedArtifactOnDeployment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCodeSigningConfigAllowedPublishersOutputReference <a name="LambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

new lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput">signingProfileVersionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signingProfileVersionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signingProfileVersionArnsInput`<sup>Optional</sup> <a name="signingProfileVersionArnsInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput"></a>

```typescript
public readonly signingProfileVersionArnsInput: string[];
```

- *Type:* string[]

---

##### `signingProfileVersionArns`<sup>Required</sup> <a name="signingProfileVersionArns" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```typescript
public readonly signingProfileVersionArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaCodeSigningConfigAllowedPublishers;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---


### LambdaCodeSigningConfigPoliciesOutputReference <a name="LambdaCodeSigningConfigPoliciesOutputReference" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktf/provider-aws'

new lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput">untrustedArtifactOnDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrustedArtifactOnDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `untrustedArtifactOnDeploymentInput`<sup>Optional</sup> <a name="untrustedArtifactOnDeploymentInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput"></a>

```typescript
public readonly untrustedArtifactOnDeploymentInput: string;
```

- *Type:* string

---

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="untrustedArtifactOnDeployment" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```typescript
public readonly untrustedArtifactOnDeployment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaCodeSigningConfigPolicies;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---



