# `redshiftClusterIamRoles` Submodule <a name="`redshiftClusterIamRoles` Submodule" id="@cdktf/provider-aws.redshiftClusterIamRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftClusterIamRoles <a name="RedshiftClusterIamRoles" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles aws_redshift_cluster_iam_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer"></a>

```typescript
import { redshiftClusterIamRoles } from '@cdktf/provider-aws'

new redshiftClusterIamRoles.RedshiftClusterIamRoles(scope: Construct, id: string, config: RedshiftClusterIamRolesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig">RedshiftClusterIamRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig">RedshiftClusterIamRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetDefaultIamRoleArn">resetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetIamRoleArns">resetIamRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts"></a>

```typescript
public putTimeouts(value: RedshiftClusterIamRolesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>

---

##### `resetDefaultIamRoleArn` <a name="resetDefaultIamRoleArn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetDefaultIamRoleArn"></a>

```typescript
public resetDefaultIamRoleArn(): void
```

##### `resetIamRoleArns` <a name="resetIamRoleArns" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetIamRoleArns"></a>

```typescript
public resetIamRoleArns(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isConstruct"></a>

```typescript
import { redshiftClusterIamRoles } from '@cdktf/provider-aws'

redshiftClusterIamRoles.RedshiftClusterIamRoles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformElement"></a>

```typescript
import { redshiftClusterIamRoles } from '@cdktf/provider-aws'

redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformResource"></a>

```typescript
import { redshiftClusterIamRoles } from '@cdktf/provider-aws'

redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference">RedshiftClusterIamRolesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArnInput">defaultIamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArnsInput">iamRoleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArns">iamRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeouts"></a>

```typescript
public readonly timeouts: RedshiftClusterIamRolesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference">RedshiftClusterIamRolesTimeoutsOutputReference</a>

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `defaultIamRoleArnInput`<sup>Optional</sup> <a name="defaultIamRoleArnInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArnInput"></a>

```typescript
public readonly defaultIamRoleArnInput: string;
```

- *Type:* string

---

##### `iamRoleArnsInput`<sup>Optional</sup> <a name="iamRoleArnsInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArnsInput"></a>

```typescript
public readonly iamRoleArnsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: RedshiftClusterIamRolesTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a> | cdktf.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

---

##### `iamRoleArns`<sup>Required</sup> <a name="iamRoleArns" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArns"></a>

```typescript
public readonly iamRoleArns: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterIamRolesConfig <a name="RedshiftClusterIamRolesConfig" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.Initializer"></a>

```typescript
import { redshiftClusterIamRoles } from '@cdktf/provider-aws'

const redshiftClusterIamRolesConfig: redshiftClusterIamRoles.RedshiftClusterIamRolesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#cluster_identifier RedshiftClusterIamRoles#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#default_iam_role_arn RedshiftClusterIamRoles#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.iamRoleArns">iamRoleArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#iam_role_arns RedshiftClusterIamRoles#iam_role_arns}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#id RedshiftClusterIamRoles#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#cluster_identifier RedshiftClusterIamRoles#cluster_identifier}.

---

##### `defaultIamRoleArn`<sup>Optional</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#default_iam_role_arn RedshiftClusterIamRoles#default_iam_role_arn}.

---

##### `iamRoleArns`<sup>Optional</sup> <a name="iamRoleArns" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.iamRoleArns"></a>

```typescript
public readonly iamRoleArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#iam_role_arns RedshiftClusterIamRoles#iam_role_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#id RedshiftClusterIamRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RedshiftClusterIamRolesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#timeouts RedshiftClusterIamRoles#timeouts}

---

### RedshiftClusterIamRolesTimeouts <a name="RedshiftClusterIamRolesTimeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.Initializer"></a>

```typescript
import { redshiftClusterIamRoles } from '@cdktf/provider-aws'

const redshiftClusterIamRolesTimeouts: redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#create RedshiftClusterIamRoles#create}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#delete RedshiftClusterIamRoles#delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#update RedshiftClusterIamRoles#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#create RedshiftClusterIamRoles#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#delete RedshiftClusterIamRoles#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster_iam_roles#update RedshiftClusterIamRoles#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterIamRolesTimeoutsOutputReference <a name="RedshiftClusterIamRolesTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer"></a>

```typescript
import { redshiftClusterIamRoles } from '@cdktf/provider-aws'

new redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftClusterIamRolesTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a> | cdktf.IResolvable

---



