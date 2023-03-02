# `s3ControlBucketLifecycleConfiguration` Submodule <a name="`s3ControlBucketLifecycleConfiguration` Submodule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlBucketLifecycleConfiguration <a name="S3ControlBucketLifecycleConfiguration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration aws_s3control_bucket_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

new s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration(scope: Construct, id: string, config: S3ControlBucketLifecycleConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig">S3ControlBucketLifecycleConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig">S3ControlBucketLifecycleConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule"></a>

```typescript
public putRule(value: IResolvable | S3ControlBucketLifecycleConfigurationRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList">S3ControlBucketLifecycleConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.rule"></a>

```typescript
public readonly rule: S3ControlBucketLifecycleConfigurationRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList">S3ControlBucketLifecycleConfigurationRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | S3ControlBucketLifecycleConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlBucketLifecycleConfigurationConfig <a name="S3ControlBucketLifecycleConfigurationConfig" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

const s3ControlBucketLifecycleConfigurationConfig: s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | S3ControlBucketLifecycleConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#rule S3ControlBucketLifecycleConfiguration#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3ControlBucketLifecycleConfigurationRule <a name="S3ControlBucketLifecycleConfigurationRule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

const s3ControlBucketLifecycleConfigurationRule: s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | abort_incomplete_multipart_upload block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="abortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload"></a>

```typescript
public readonly abortIncompleteMultipartUpload: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

abort_incomplete_multipart_upload block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.expiration"></a>

```typescript
public readonly expiration: S3ControlBucketLifecycleConfigurationRuleExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expiration S3ControlBucketLifecycleConfiguration#expiration}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.filter"></a>

```typescript
public readonly filter: S3ControlBucketLifecycleConfigurationRuleFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#filter S3ControlBucketLifecycleConfiguration#filter}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}.

---

### S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload <a name="S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

const s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload: s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}. |

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```typescript
public readonly daysAfterInitiation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}.

---

### S3ControlBucketLifecycleConfigurationRuleExpiration <a name="S3ControlBucketLifecycleConfigurationRuleExpiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

const s3ControlBucketLifecycleConfigurationRuleExpiration: s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.date">date</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}.

---

##### `expiredObjectDeleteMarker`<sup>Optional</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker"></a>

```typescript
public readonly expiredObjectDeleteMarker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}.

---

### S3ControlBucketLifecycleConfigurationRuleFilter <a name="S3ControlBucketLifecycleConfigurationRuleFilter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

const s3ControlBucketLifecycleConfigurationRuleFilter: s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

new s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">daysAfterInitiationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysAfterInitiationInput`<sup>Optional</sup> <a name="daysAfterInitiationInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```typescript
public readonly daysAfterInitiationInput: number;
```

- *Type:* number

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```typescript
public readonly daysAfterInitiation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---


### S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

new s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">resetExpiredObjectDeleteMarker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDate"></a>

```typescript
public resetDate(): void
```

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetExpiredObjectDeleteMarker` <a name="resetExpiredObjectDeleteMarker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```typescript
public resetExpiredObjectDeleteMarker(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput">dateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expiredObjectDeleteMarkerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput"></a>

```typescript
public readonly dateInput: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `expiredObjectDeleteMarkerInput`<sup>Optional</sup> <a name="expiredObjectDeleteMarkerInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```typescript
public readonly expiredObjectDeleteMarkerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `expiredObjectDeleteMarker`<sup>Required</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```typescript
public readonly expiredObjectDeleteMarker: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ControlBucketLifecycleConfigurationRuleExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---


### S3ControlBucketLifecycleConfigurationRuleFilterOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleFilterOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

new s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ControlBucketLifecycleConfigurationRuleFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---


### S3ControlBucketLifecycleConfigurationRuleList <a name="S3ControlBucketLifecycleConfigurationRuleList" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

new s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get"></a>

```typescript
public get(index: number): S3ControlBucketLifecycleConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ControlBucketLifecycleConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a>[]

---


### S3ControlBucketLifecycleConfigurationRuleOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer"></a>

```typescript
import { s3ControlBucketLifecycleConfiguration } from '@cdktf/provider-aws'

new s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload">putAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload">resetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortIncompleteMultipartUpload` <a name="putAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload"></a>

```typescript
public putAbortIncompleteMultipartUpload(value: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration"></a>

```typescript
public putExpiration(value: S3ControlBucketLifecycleConfigurationRuleExpiration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter"></a>

```typescript
public putFilter(value: S3ControlBucketLifecycleConfigurationRuleFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---

##### `resetAbortIncompleteMultipartUpload` <a name="resetAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload"></a>

```typescript
public resetAbortIncompleteMultipartUpload(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference">S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference">S3ControlBucketLifecycleConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput">abortIncompleteMultipartUploadInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expirationInput">expirationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abortIncompleteMultipartUpload`<sup>Required</sup> <a name="abortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload"></a>

```typescript
public readonly abortIncompleteMultipartUpload: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a>

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expiration"></a>

```typescript
public readonly expiration: S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference">S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filter"></a>

```typescript
public readonly filter: S3ControlBucketLifecycleConfigurationRuleFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference">S3ControlBucketLifecycleConfigurationRuleFilterOutputReference</a>

---

##### `abortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```typescript
public readonly abortIncompleteMultipartUploadInput: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: S3ControlBucketLifecycleConfigurationRuleExpiration;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: S3ControlBucketLifecycleConfigurationRuleFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ControlBucketLifecycleConfigurationRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule">S3ControlBucketLifecycleConfigurationRule</a> | cdktf.IResolvable

---



