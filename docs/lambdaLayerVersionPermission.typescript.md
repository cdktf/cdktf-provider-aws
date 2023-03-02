# `lambdaLayerVersionPermission` Submodule <a name="`lambdaLayerVersionPermission` Submodule" id="@cdktf/provider-aws.lambdaLayerVersionPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersionPermission <a name="LambdaLayerVersionPermission" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission aws_lambda_layer_version_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer"></a>

```typescript
import { lambdaLayerVersionPermission } from '@cdktf/provider-aws'

new lambdaLayerVersionPermission.LambdaLayerVersionPermission(scope: Construct, id: string, config: LambdaLayerVersionPermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig">LambdaLayerVersionPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig">LambdaLayerVersionPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct"></a>

```typescript
import { lambdaLayerVersionPermission } from '@cdktf/provider-aws'

lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement"></a>

```typescript
import { lambdaLayerVersionPermission } from '@cdktf/provider-aws'

lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource"></a>

```typescript
import { lambdaLayerVersionPermission } from '@cdktf/provider-aws'

lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerNameInput">layerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementIdInput">statementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumberInput">versionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerName">layerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementId">statementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `layerNameInput`<sup>Optional</sup> <a name="layerNameInput" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerNameInput"></a>

```typescript
public readonly layerNameInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementIdInput"></a>

```typescript
public readonly statementIdInput: string;
```

- *Type:* string

---

##### `versionNumberInput`<sup>Optional</sup> <a name="versionNumberInput" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumberInput"></a>

```typescript
public readonly versionNumberInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionPermissionConfig <a name="LambdaLayerVersionPermissionConfig" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.Initializer"></a>

```typescript
import { lambdaLayerVersionPermission } from '@cdktf/provider-aws'

const lambdaLayerVersionPermissionConfig: lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#action LambdaLayerVersionPermission#action}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.layerName">layerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#layer_name LambdaLayerVersionPermission#layer_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#principal LambdaLayerVersionPermission#principal}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.statementId">statementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#statement_id LambdaLayerVersionPermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.versionNumber">versionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#version_number LambdaLayerVersionPermission#version_number}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#id LambdaLayerVersionPermission#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.organizationId">organizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#organization_id LambdaLayerVersionPermission#organization_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#action LambdaLayerVersionPermission#action}.

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#layer_name LambdaLayerVersionPermission#layer_name}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#principal LambdaLayerVersionPermission#principal}.

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#statement_id LambdaLayerVersionPermission#statement_id}.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#version_number LambdaLayerVersionPermission#version_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#id LambdaLayerVersionPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktf/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission#organization_id LambdaLayerVersionPermission#organization_id}.

---



